/* ========================================
   GALLERY PAGE JAVASCRIPT
   ======================================== */

// photosData is already loaded from main.js

// Gallery categories with metadata
const galleryCategories = {
    portrait: { name: 'Portrait Photography', count: 15, coverImage: 'https://picsum.photos/400/600?random=1' },
    landscape: { name: 'Landscape Photography', count: 15, coverImage: 'https://picsum.photos/600/400?random=16' },
    commercial: { name: 'Commercial Photography', count: 15, coverImage: 'https://picsum.photos/500/500?random=31' },
    event: { name: 'Event Photography', count: 15, coverImage: 'https://picsum.photos/600/450?random=46' }
};

// Current gallery state
let galleryCategory = '';
let galleryImages = [];
let galleryLightboxIndex = 0;

// Initialize gallery page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Gallery page DOM loaded');
    
    // Wait for photosData to be available
    if (typeof photosData === 'undefined') {
        console.log('photosData not yet available, waiting...');
        setTimeout(initGallery, 100);
    } else {
        initGallery();
    }
});

function initGallery() {
    console.log('Initializing gallery...');
    
    // Initialize theme toggle (reuse from main.js)
    initThemeToggle();
    initMobileMenu();
    
    // Get category from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    galleryCategory = urlParams.get('category') || 'portrait';
    
    // Load gallery
    loadGallery(galleryCategory);
    loadOtherGalleries();
    
    // Initialize lightbox
    initLightbox();
    
    console.log('Gallery page initialized successfully!');
}

// Load gallery content
function loadGallery(category) {
    console.log('Loading gallery for category:', category);
    console.log('photosData available:', typeof photosData !== 'undefined', photosData);
    
    const title = document.getElementById('gallery-title');
    const subtitle = document.getElementById('gallery-subtitle');
    const grid = document.getElementById('masonry-grid');
    
    console.log('Elements found:', { title, subtitle, grid });
    
    if (!title || !subtitle || !grid) {
        console.error('Missing required DOM elements:', { title, subtitle, grid });
        return;
    }
    
    if (typeof photosData === 'undefined') {
        console.error('photosData is not defined! Gallery cannot load.');
        return;
    }
    
    galleryImages = photosData[category] || [];
    const categoryData = galleryCategories[category];
    
    console.log('Images for category:', galleryImages.length);
    
    if (!galleryImages.length) {
        console.error(`No images found for category: ${category}`);
        return;
    }
    
    // Update title and subtitle
    title.textContent = categoryData.name;
    subtitle.textContent = `${galleryImages.length} photos in this collection`;
    
    // Clear and populate grid
    grid.innerHTML = '';
    
    galleryImages.forEach((image, index) => {
        console.log('Adding image:', image.title);
        
        const item = document.createElement('div');
        item.className = 'masonry-item';
        item.setAttribute('data-index', index);
        
        item.innerHTML = `
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="masonry-overlay">
                <div class="masonry-info">
                    <h3>${image.title}</h3>
                    <p>${image.description}</p>
                </div>
            </div>
        `;
        
        item.addEventListener('click', () => openLightbox(index));
        grid.appendChild(item);
    });
    
    console.log('Gallery loaded successfully with', galleryImages.length, 'images');
}

// Load other galleries suggestions
function loadOtherGalleries() {
    const container = document.getElementById('galleries-suggestions');
    container.innerHTML = '';
    
    Object.keys(galleryCategories).forEach(category => {
        if (category === galleryCategory) return; // Skip current gallery
        
        const categoryData = galleryCategories[category];
        const suggestion = document.createElement('a');
        suggestion.href = `gallery.html?category=${category}`;
        suggestion.className = 'gallery-suggestion';
        
        suggestion.innerHTML = `
            <img src="${categoryData.coverImage}" alt="${categoryData.name}">
            <div class="gallery-suggestion-overlay">
                <h3>${categoryData.name}</h3>
                <p>${categoryData.count} photos</p>
            </div>
        `;
        
        container.appendChild(suggestion);
    });
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
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    galleryLightboxIndex = index;
    const image = galleryImages[index];
    
    // Update lightbox content
    lightboxImage.src = image.src;
    lightboxImage.alt = image.title;
    lightboxTitle.textContent = image.title;
    lightboxDescription.textContent = image.description;
    
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