/* ========================================
   GALLERY PAGE JAVASCRIPT
   ======================================== */

// Gallery categories with metadata
const galleryCategories = {
    portrait: { name: 'Portrait Photography', icon: 'fa-user' },
    landscape: { name: 'Landscape Photography', icon: 'fa-mountain' },
    events: { name: 'Events Photography', icon: 'fa-camera' }
};

// Current gallery state
let galleryCategory = '';
let galleryImages = [];
let galleryLightboxIndex = 0;

// Initialize gallery page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Gallery page DOM loaded');
    initGallery();
});

function initGallery() {
    console.log('Initializing gallery...');
    
    // Initialize theme toggle and mobile menu
    initThemeToggle();
    initMobileMenu();
    
    // Get category from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    galleryCategory = urlParams.get('category') || 'portrait';
    
    // Fetch photos from index.html and load gallery
    fetchPhotosFromHomepage(galleryCategory);
    
    console.log('Gallery page initialized successfully!');
}

// Fetch photos from homepage index.html
async function fetchPhotosFromHomepage(category) {
    try {
        const response = await fetch('index.html');
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Get all photos items that match the category
        const photosItems = doc.querySelectorAll('.photos-item');
        galleryImages = [];
        
        photosItems.forEach((item, index) => {
            const categories = item.getAttribute('data-category').trim().split(' ');
            
            // Check if this photo belongs to the current category (single OR multi-category)
            if (categories.includes(category)) {
                const img = item.querySelector('img');
                if (img) {
                    galleryImages.push({
                        src: img.getAttribute('src'),
                        alt: img.getAttribute('alt') || 'Photo',
                        width: img.getAttribute('width'),
                        height: img.getAttribute('height')
                    });
                }
            }
        });
        
        console.log(`Found ${galleryImages.length} photos for category: ${category}`);
        
        // Load the gallery with fetched images
        loadGallery(category);
        loadOtherGalleries();
        initLightbox();
        
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
}

// Load gallery content
function loadGallery(category) {
    const title = document.getElementById('gallery-title');
    const subtitle = document.getElementById('gallery-subtitle');
    const grid = document.getElementById('masonry-grid');
    
    if (!title || !subtitle || !grid) {
        console.error('Missing required DOM elements');
        return;
    }
    
    const categoryData = galleryCategories[category];
    
    // Update header with breadcrumb and title
    const categoryTitle = categoryData ? categoryData.name : category.charAt(0).toUpperCase() + category.slice(1);
    title.innerHTML = `
        <a href="index.html#photos" class="breadcrumb-link">
            <i class="fas fa-arrow-left"></i> Back to Home
        </a>
        <span class="breadcrumb-separator">/</span>
        <span>${categoryTitle}</span>
    `;
    subtitle.textContent = `${galleryImages.length} photos in this collection`;
    
    // Clear and populate grid
    grid.innerHTML = '';
    
    if (galleryImages.length === 0) {
        grid.innerHTML = '<p style="text-align: center; padding: 2rem;">No photos found in this category.</p>';
        return;
    }
    
    galleryImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'masonry-item';
        item.setAttribute('data-index', index);
        
        const aspectRatio = image.width && image.height ? (parseFloat(image.height) / parseFloat(image.width) * 100) : 100;
        
        item.innerHTML = `
            <div class="masonry-image-container" style="padding-bottom: ${aspectRatio}%">
                <img src="${image.src}" alt="${image.alt}" loading="lazy">
            </div>
        `;
        
        item.addEventListener('click', () => openLightbox(index));
        grid.appendChild(item);
    });
    
    console.log('Gallery loaded successfully with', galleryImages.length, 'images');
}

// Load other galleries suggestions
async function loadOtherGalleries() {
    const container = document.getElementById('galleries-suggestions');
    if (!container) return;
    
    container.innerHTML = '';
    
    try {
        const response = await fetch('index.html');
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const photosItems = doc.querySelectorAll('.photos-item');
        
        // Get other categories
        const otherCategories = Object.keys(galleryCategories).filter(cat => cat !== galleryCategory);
        
        otherCategories.forEach(category => {
            // Find first image for this category (thumbnail) - prefer single-category
            let thumbnailSrc = '';
            // First try to find a single-category image
            for (let item of photosItems) {
                const categories = item.getAttribute('data-category').trim().split(' ');
                if (categories.includes(category) && categories.length === 1) {
                    const img = item.querySelector('img');
                    if (img) {
                        thumbnailSrc = img.getAttribute('src');
                        break;
                    }
                }
            }
            // If no single-category found, use any image with this category
            if (!thumbnailSrc) {
                for (let item of photosItems) {
                    const categories = item.getAttribute('data-category').trim().split(' ');
                    if (categories.includes(category)) {
                        const img = item.querySelector('img');
                        if (img) {
                            thumbnailSrc = img.getAttribute('src');
                            break;
                        }
                    }
                }
            }
            
            // Count ALL photos in this category (including multi-category)
            let count = 0;
            photosItems.forEach(item => {
                const categories = item.getAttribute('data-category').trim().split(' ');
                if (categories.includes(category)) {
                    count++;
                }
            });
            
            const categoryData = galleryCategories[category];
            const suggestion = document.createElement('a');
            suggestion.href = `gallery.html?category=${category}`;
            suggestion.className = 'gallery-suggestion';
            
            suggestion.innerHTML = `
                <div class="gallery-suggestion-image">
                    <img src="${thumbnailSrc}" alt="${categoryData.name}" loading="lazy">
                </div>
                <div class="gallery-suggestion-overlay">
                    <div class="gallery-suggestion-info">
                        <i class="fas ${categoryData.icon}"></i>
                        <h3>${categoryData.name}</h3>
                        <p>${count} photos</p>
                    </div>
                </div>
            `;
            
            container.appendChild(suggestion);
        });
    } catch (error) {
        console.error('Error loading other galleries:', error);
    }
}

// Lightbox functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxOverlay = lightbox.querySelector('.lightbox-overlay');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    
    // Navigation
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigateLightbox(-1);
                break;
            case 'ArrowRight':
                navigateLightbox(1);
                break;
        }
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    galleryLightboxIndex = index;
    const image = galleryImages[index];
    
    // Update lightbox content
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    
    // Update navigation buttons
    lightboxPrev.disabled = index === 0;
    lightboxNext.disabled = index === galleryImages.length - 1;
    
    // Show lightbox
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    const newIndex = galleryLightboxIndex + direction;
    
    if (newIndex >= 0 && newIndex < galleryImages.length) {
        openLightbox(newIndex);
    }
}

// Back button functionality
function goBack() {
    if (document.referrer && document.referrer.includes(window.location.host)) {
        window.history.back();
    } else {
        window.location.href = 'index.html#photos';
    }
}

// Theme toggle functionality (reused from main.js)
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-switch');
    const body = document.body;
    
    if (!themeToggle) {
        console.warn('Theme toggle not found, using default light theme');
        return;
    }
    
    // Check for saved theme preference or default to light theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.remove('dark-theme', 'light-theme');
    body.classList.add(`${currentTheme}-theme`);
    
    // Set toggle state based on current theme
    themeToggle.checked = currentTheme === 'light';
    
    // Add event listener for theme toggle
    themeToggle.addEventListener('change', function() {
        const newTheme = this.checked ? 'light' : 'dark';
        
        // Add transition class for smooth theme switching
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        // Remove existing theme classes and add new one
        body.classList.remove('dark-theme', 'light-theme');
        body.classList.add(`${newTheme}-theme`);
        
        // Save theme preference
        localStorage.setItem('theme', newTheme);
        
        // Remove transition after animation completes
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
}

// Mobile menu functionality (reused from main.js)
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log('Mobile menu elements:', { mobileToggle, navMenu, navClose });
    
    if (!mobileToggle || !navMenu) {
        console.warn('Mobile menu elements not found, skipping mobile menu initialization');
        return;
    }
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu
    if (navClose) {
        navClose.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}