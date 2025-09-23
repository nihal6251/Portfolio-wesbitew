/* ========================================
   MAIN JAVASCRIPT FILE
   Interactive functionality for photos website
   ======================================== */

// Wait for DOM to be fully loaded
/* ========================================
   PHOTOS IMAGE DATA
   ======================================== */
const photosData = {
    portrait: [
        { id: 1, src: 'https://picsum.photos/800/1200?random=1', title: 'Creative Portrait I', description: 'Studio portrait with dramatic lighting' },
        { id: 2, src: 'assets/images//p2.jpeg', title: 'Creative Portrait II', description: 'Natural light portrait session' },
        { id: 3, src: 'https://picsum.photos/800/1200?random=3', title: 'Fashion Portrait', description: 'High fashion editorial shoot' },
        { id: 4, src: 'https://picsum.photos/800/1200?random=4', title: 'Corporate Headshot', description: 'Professional business portrait' },
        { id: 5, src: 'https://picsum.photos/800/1200?random=5', title: 'Artistic Portrait', description: 'Fine art portrait with creative composition' },
        { id: 6, src: 'https://picsum.photos/800/1200?random=6', title: 'Street Portrait', description: 'Candid street photography portrait' },
        { id: 7, src: 'https://picsum.photos/800/1200?random=7', title: 'Beauty Portrait', description: 'Beauty shoot with soft lighting' },
        { id: 8, src: 'https://picsum.photos/800/1200?random=8', title: 'Character Study', description: 'Deep character portrait session' },
        { id: 9, src: 'https://picsum.photos/800/1200?random=9', title: 'Environmental Portrait', description: 'Portrait in natural environment' },
        { id: 10, src: 'https://picsum.photos/800/1200?random=10', title: 'Glamour Shot', description: 'Glamour photography session' },
        { id: 11, src: 'https://picsum.photos/800/1200?random=11', title: 'Couple Portrait', description: 'Romantic couple photography' },
        { id: 12, src: 'https://picsum.photos/800/1200?random=12', title: 'Family Portrait', description: 'Warm family portrait session' },
        { id: 13, src: 'https://picsum.photos/800/1200?random=13', title: 'Maternity Portrait', description: 'Beautiful maternity photography' },
        { id: 14, src: 'https://picsum.photos/800/1200?random=14', title: 'Senior Portrait', description: 'High school senior portrait' },
        { id: 15, src: 'https://picsum.photos/800/1200?random=15', title: 'Artist Portrait', description: 'Creative artist in their studio' }
    ],
    landscape: [
        { id: 16, src: 'https://picsum.photos/1200/800?random=16', title: 'Mountain Vista', description: 'Majestic mountain landscape at sunrise' },
        { id: 17, src: 'assets/images//p2.jpeg', title: 'Ocean Waves', description: 'Dynamic seascape with crashing waves' },
        { id: 18, src: 'https://picsum.photos/1200/800?random=18', title: 'Forest Path', description: 'Mystical forest trail in autumn' },
        { id: 19, src: 'https://picsum.photos/1200/800?random=19', title: 'Desert Sunset', description: 'Golden hour in the desert landscape' },
        { id: 20, src: 'https://picsum.photos/1200/800?random=20', title: 'City Skyline', description: 'Urban landscape at twilight' },
        { id: 21, src: 'https://picsum.photos/1200/800?random=21', title: 'Lake Reflection', description: 'Perfect mirror reflection on calm lake' },
        { id: 22, src: 'https://picsum.photos/1200/800?random=22', title: 'Canyon Views', description: 'Dramatic canyon landscape photography' },
        { id: 23, src: 'https://picsum.photos/1200/800?random=23', title: 'Northern Lights', description: 'Aurora borealis over snowy landscape' },
        { id: 24, src: 'https://picsum.photos/1200/800?random=24', title: 'Waterfall', description: 'Powerful waterfall in pristine nature' },
        { id: 25, src: 'https://picsum.photos/1200/800?random=25', title: 'Rolling Hills', description: 'Gentle hills covered in green grass' },
        { id: 26, src: 'https://picsum.photos/1200/800?random=26', title: 'Rock formations', description: 'Unique geological rock structures' },
        { id: 27, src: 'https://picsum.photos/1200/800?random=27', title: 'Coastal Cliffs', description: 'Dramatic cliffs overlooking the ocean' },
        { id: 28, src: 'https://picsum.photos/1200/800?random=28', title: 'Prairie Storm', description: 'Storm clouds over vast prairie' },
        { id: 29, src: 'https://picsum.photos/1200/800?random=29', title: 'Vineyard Rows', description: 'Organized vineyard landscape' },
        { id: 30, src: 'https://picsum.photos/1200/800?random=30', title: 'Alpine Lake', description: 'Crystal clear alpine lake surrounded by peaks' }
    ],
    commercial: [
        { id: 31, src: 'https://picsum.photos/900/900?random=31', title: 'Product Showcase', description: 'High-end product photography' },
        { id: 32, src: 'https://picsum.photos/900/900?random=32', title: 'Brand Campaign', description: 'Creative brand advertising shoot' },
        { id: 33, src: 'https://picsum.photos/900/900?random=33', title: 'Fashion Editorial', description: 'Commercial fashion photography' },
        { id: 34, src: 'https://picsum.photos/900/900?random=34', title: 'Restaurant Menu', description: 'Food photography for restaurant' },
        { id: 35, src: 'https://picsum.photos/900/900?random=35', title: 'Tech Product', description: 'Technology product commercial shoot' },
        { id: 36, src: 'https://picsum.photos/900/900?random=36', title: 'Architecture', description: 'Commercial architectural photography' },
        { id: 37, src: 'https://picsum.photos/900/900?random=37', title: 'Corporate Event', description: 'Business conference photography' },
        { id: 38, src: 'https://picsum.photos/900/900?random=38', title: 'Lifestyle Brand', description: 'Lifestyle product photography' },
        { id: 39, src: 'https://picsum.photos/900/900?random=39', title: 'Hotel Interior', description: 'Luxury hotel interior photography' },
        { id: 40, src: 'https://picsum.photos/900/900?random=40', title: 'Automotive', description: 'Car commercial photography' },
        { id: 41, src: 'https://picsum.photos/900/900?random=41', title: 'Jewelry Campaign', description: 'High-end jewelry photography' },
        { id: 42, src: 'https://picsum.photos/900/900?random=42', title: 'Real Estate', description: 'Property marketing photography' },
        { id: 43, src: 'https://picsum.photos/900/900?random=43', title: 'Beauty Products', description: 'Cosmetics product photography' },
        { id: 44, src: 'https://picsum.photos/900/900?random=44', title: 'Sports Equipment', description: 'Athletic gear commercial shoot' },
        { id: 45, src: 'https://picsum.photos/900/900?random=45', title: 'Wine Collection', description: 'Premium wine bottle photography' }
    ],
    event: [
        { id: 46, src: 'https://picsum.photos/1000/800?random=46', title: 'Wedding Ceremony', description: 'Beautiful wedding ceremony moments' },
        { id: 47, src: 'https://picsum.photos/1000/800?random=47', title: 'Corporate Gala', description: 'Elegant corporate event photography' },
        { id: 48, src: 'https://picsum.photos/1000/800?random=48', title: 'Music Concert', description: 'Live music performance photography' },
        { id: 49, src: 'https://picsum.photos/1000/800?random=49', title: 'Birthday Party', description: 'Joyful birthday celebration' },
        { id: 50, src: 'https://picsum.photos/1000/800?random=50', title: 'Graduation Day', description: 'Memorable graduation ceremony' },
        { id: 51, src: 'https://picsum.photos/1000/800?random=51', title: 'Sports Event', description: 'Action-packed sports photography' },
        { id: 52, src: 'https://picsum.photos/1000/800?random=52', title: 'Art Exhibition', description: 'Gallery opening event photography' },
        { id: 53, src: 'https://picsum.photos/1000/800?random=53', title: 'Conference', description: 'Professional conference documentation' },
        { id: 54, src: 'https://picsum.photos/1000/800?random=54', title: 'Festival', description: 'Vibrant cultural festival photography' },
        { id: 55, src: 'https://picsum.photos/1000/800?random=55', title: 'Charity Auction', description: 'Fundraising event photography' },
        { id: 56, src: 'https://picsum.photos/1000/800?random=56', title: 'Fashion Show', description: 'Runway fashion event photography' },
        { id: 57, src: 'https://picsum.photos/1000/800?random=57', title: 'Award Ceremony', description: 'Prestigious awards night photography' },
        { id: 58, src: 'https://picsum.photos/1000/800?random=58', title: 'Product Launch', description: 'Exciting product launch event' },
        { id: 59, src: 'https://picsum.photos/1000/800?random=59', title: 'Team Building', description: 'Corporate team building event' },
        { id: 60, src: 'https://picsum.photos/1000/800?random=60', title: 'Holiday Party', description: 'Festive holiday celebration photography' }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initThemeToggle();
    initMobileMenu();
    initSmoothScrolling();
    initPhotosFilters();
    initPhotosSwipe(); // Add swipe gesture support
    
    // Only initialize modal if it exists (main page only)
    if (document.getElementById('photos-modal')) {
        initPhotosModal();
    }
    
    initContactForm();
    initScrollAnimations();
    initActiveNavigation();
    initHeroVideo();
    
    console.log('Photos website initialized successfully!');
});

/* ========================================
   THEME TOGGLE FUNCTIONALITY
   ======================================== */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-switch');
    const body = document.body;
    
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
        
        // Trigger custom event for theme change
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme: newTheme } 
        }));
    });
}

/* ========================================
   MOBILE MENU FUNCTIONALITY
   ======================================== */
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/* ========================================
   SMOOTH SCROLLING FUNCTIONALITY
   ======================================== */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Smooth scroll for scroll indicator
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
}

/* ========================================
   ACTIVE NAVIGATION HIGHLIGHTING
   ======================================== */
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Update active navigation on scroll
    window.addEventListener('scroll', debounce(updateActiveNav, 10));
    
    // Initial call
    updateActiveNav();
}

/* ========================================
   PHOTOS FILTERING FUNCTIONALITY
   ======================================== */
function initPhotosFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const photosGrid = document.getElementById('photos-grid');
    const photosItems = document.querySelectorAll('.photos-item');
    const seeMoreBtn = document.querySelector('.see-more-btn');
    
    if (!filterButtons.length || !photosGrid || !photosItems.length) {
        console.warn('Photos filter elements not found');
        return;
    }
    
    let currentFilter = 'all';
    let showingAll = false;
    
    // Get responsive photo limits
    function getPhotoLimit() {
        const width = window.innerWidth;
        if (width >= 1025) return 12;
        if (width >= 769) return 8;
        return 6;
    }
    
    // Filter and display photos
    function filterPhotos(filter) {
        currentFilter = filter;
        showingAll = false;
        
        // Add filtering class for animation
        photosItems.forEach(item => {
            item.classList.add('filtering-out');
        });
        
        setTimeout(() => {
            const limit = getPhotoLimit();
            let visibleCount = 0;
            
            photosItems.forEach(item => {
                const category = item.getAttribute('data-category');
                const shouldShow = filter === 'all' || category === filter;
                
                if (shouldShow && visibleCount < limit) {
                    item.style.display = 'inline-block';
                    item.classList.remove('filtering-out');
                    item.classList.add('filtering-in');
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                    item.classList.remove('filtering-out', 'filtering-in');
                }
            });
            
            // Show/hide see more button
            const totalPhotos = Array.from(photosItems).filter(item => {
                const category = item.getAttribute('data-category');
                return filter === 'all' || category === filter;
            }).length;
            
            if (totalPhotos > limit) {
                seeMoreBtn.parentElement.style.display = 'block';
                seeMoreBtn.querySelector('span').textContent = 'See More';
                seeMoreBtn.querySelector('i').className = 'fas fa-chevron-down';
            } else {
                seeMoreBtn.parentElement.style.display = 'none';
            }
        }, 150);
    }
    
    // Handle filter button clicks
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter photos
            filterPhotos(filter);
        });
    });
    
    // Handle see more button
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function() {
            if (!showingAll) {
                // Show all photos for current filter
                showingAll = true;
                
                photosItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    const shouldShow = currentFilter === 'all' || category === currentFilter;
                    
                    if (shouldShow) {
                        item.style.display = 'inline-block';
                        item.classList.remove('filtering-out');
                        item.classList.add('filtering-in');
                    }
                });
                
                this.querySelector('span').textContent = 'Show Less';
                this.querySelector('i').className = 'fas fa-chevron-up';
            } else {
                // Show limited photos again
                filterPhotos(currentFilter);
            }
        });
    }
    
    // Initialize with 'all' filter
    filterPhotos('all');
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (!showingAll) {
            filterPhotos(currentFilter);
        }
    });
}

/* ========================================
   PHOTOS SWIPE GESTURE FUNCTIONALITY
   ======================================== */
function initPhotosSwipe() {
    const photosSection = document.getElementById('photos');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!photosSection || window.innerWidth > 768) return; // Only on mobile
    
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    
    const categories = ['all', 'portrait', 'landscape', 'events', 'commercial'];
    let currentCategoryIndex = 0;
    
    // Get current active category index
    function getCurrentCategoryIndex() {
        const activeBtn = document.querySelector('.filter-btn.active');
        const activeFilter = activeBtn.getAttribute('data-filter');
        return categories.indexOf(activeFilter);
    }
    
    // Switch to category by index
    function switchToCategory(index) {
        if (index >= 0 && index < categories.length) {
            const targetBtn = document.querySelector(`[data-filter="${categories[index]}"]`);
            if (targetBtn) {
                targetBtn.click();
                currentCategoryIndex = index;
            }
        }
    }
    
    photosSection.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    photosSection.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        
        const swipeDistanceX = touchEndX - touchStartX;
        const swipeDistanceY = touchEndY - touchStartY;
        
        // Check if it's a horizontal swipe (not vertical scroll)
        if (Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY) && Math.abs(swipeDistanceX) > 50) {
            currentCategoryIndex = getCurrentCategoryIndex();
            
            if (swipeDistanceX > 0) {
                // Swipe right - previous category
                if (currentCategoryIndex > 0) {
                    switchToCategory(currentCategoryIndex - 1);
                }
            } else {
                // Swipe left - next category
                if (currentCategoryIndex < categories.length - 1) {
                    switchToCategory(currentCategoryIndex + 1);
                }
            }
        }
    }, { passive: true });
    
    // Add visual feedback for swipe
    photosSection.addEventListener('touchmove', function(e) {
        const currentX = e.changedTouches[0].screenX;
        const currentY = e.changedTouches[0].screenY;
        const deltaX = currentX - touchStartX;
        const deltaY = currentY - touchStartY;
        
        // Only provide visual feedback for horizontal swipes
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
            photosSection.style.transform = `translateX(${deltaX * 0.1}px)`;
            photosSection.style.transition = 'none';
        }
    }, { passive: true });
    
    // Reset transform after touch ends
    photosSection.addEventListener('touchend', function() {
        photosSection.style.transform = '';
        photosSection.style.transition = 'transform 0.3s ease';
    }, { passive: true });
    
    // Re-initialize on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Remove mobile swipe functionality on desktop
            photosSection.style.transform = '';
            photosSection.style.transition = '';
        }
    });
}

/* ========================================
   CONTACT FORM FUNCTIONALITY
   ======================================== */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Validate form
            if (validateForm(formObject)) {
                // Simulate form submission
                showFormStatus('success', 'Thank you! Your message has been sent successfully.');
                this.reset();
            } else {
                showFormStatus('error', 'Please fill in all required fields correctly.');
            }
        });
    }
}

function validateForm(data) {
    const requiredFields = ['name', 'email', 'subject', 'project-type', 'message'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check required fields
    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            return false;
        }
    }
    
    // Validate email format
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    return true;
}

function showFormStatus(type, message) {
    // Remove existing status messages
    const existingStatus = document.querySelector('.form-status');
    if (existingStatus) {
        existingStatus.remove();
    }
    
    // Create status message element
    const statusDiv = document.createElement('div');
    statusDiv.className = `form-status form-status-${type}`;
    statusDiv.textContent = message;
    
    // Add styles for status message
    statusDiv.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 8px;
        font-weight: 500;
        text-align: center;
        transition: all 0.3s ease;
        ${type === 'success' 
            ? 'background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0;' 
            : 'background: #fef2f2; color: #dc2626; border: 1px solid #fecaca;'
        }
    `;
    
    // Add to form
    const contactForm = document.getElementById('contact-form');
    contactForm.appendChild(statusDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (statusDiv.parentNode) {
            statusDiv.style.opacity = '0';
            setTimeout(() => statusDiv.remove(), 300);
        }
    }, 5000);
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
function initScrollAnimations() {
    // Create intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .photos-item, .video-item, .timeline-item');
    animateElements.forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    });
    
    // Add CSS for animations
    addScrollAnimationStyles();
}

function addScrollAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-element.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .timeline-item.animate-element {
            transform: translateX(-30px);
        }
        
        .timeline-item.animate-element.animate-in {
            transform: translateX(0);
        }
        
        /* Stagger animation for photos items */
        .photos-item.animate-element {
            transition-delay: var(--delay, 0s);
        }
    `;
    document.head.appendChild(style);
    
    // Add stagger delays to photos items
    const photosItems = document.querySelectorAll('.photos-item');
    photosItems.forEach((item, index) => {
        item.style.setProperty('--delay', `${index * 0.1}s`);
    });
}

/* ========================================
   HERO VIDEO FUNCTIONALITY
   ======================================== */
function initHeroVideo() {
    const heroVideo = document.querySelector('.hero-video');
    const heroSection = document.querySelector('.hero');
    
    if (heroVideo) {
        // Pause video when not in view (for performance)
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroVideo.play().catch(console.log);
                } else {
                    heroVideo.pause();
                }
            });
        }, { threshold: 0.25 });
        
        videoObserver.observe(heroSection);
        
        // Handle video load errors
        heroVideo.addEventListener('error', function() {
            console.log('Video failed to load, showing fallback');
            this.style.display = 'none';
            
            // Add fallback background image
            heroSection.style.background = `
                linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
                url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=1080&fit=crop') center/cover
            `;
        });
    }
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Debounce function to limit rapid function calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance optimization
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Function to preload images for better performance
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Function to handle viewport changes
function handleViewportChange() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Update viewport height on resize and orientationchange
window.addEventListener('resize', debounce(handleViewportChange, 250));
window.addEventListener('orientationchange', handleViewportChange);
handleViewportChange(); // Initial call

/* ========================================
   PERFORMANCE OPTIMIZATIONS
   ======================================== */

// Lazy load images when they come into view
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Initialize lazy loading
initLazyLoading();

/* ========================================
   ACCESSIBILITY ENHANCEMENTS
   ======================================== */

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navMenu.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Focus management for modals and overlays
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

/* ========================================
   PHOTOS MODAL FUNCTIONALITY
   ======================================== */
let currentCategory = '';
let currentImageIndex = 0;
let currentImages = [];
let zoomLevel = 1;

function initPhotosModal() {
    // Get modal elements
    const modal = document.getElementById('photos-modal');
    const zoomModal = document.getElementById('zoom-modal');
    const modalClose = document.getElementById('modal-close');
    const zoomClose = document.getElementById('zoom-close');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const zoomOverlay = zoomModal.querySelector('.zoom-overlay');
    
    // Get image elements
    const mainImage = document.getElementById('modal-main-img');
    const imageTitle = document.getElementById('image-title');
    const imageDescription = document.getElementById('image-description');
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    const modalTitle = document.getElementById('modal-title');
    
    // Navigation elements
    const prevButton = document.getElementById('prev-image');
    const nextButton = document.getElementById('next-image');
    const zoomButton = document.getElementById('zoom-btn');
    
    // Zoom elements
    const zoomImage = document.getElementById('zoom-image');
    const zoomIn = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');
    const zoomReset = document.getElementById('zoom-reset');
    
    // Add click handlers to photos items
    const photosItems = document.querySelectorAll('.photos-item');
    photosItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-photos-category');
            openModal(category);
        });
        
        // Add hover effect
        item.style.cursor = 'pointer';
    });
    
    // Modal close handlers
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    zoomClose.addEventListener('click', closeZoom);
    zoomOverlay.addEventListener('click', closeZoom);
    
    // Navigation handlers
    prevButton.addEventListener('click', showPreviousImage);
    nextButton.addEventListener('click', showNextImage);
    zoomButton.addEventListener('click', openZoom);
    
    // Zoom controls
    zoomIn.addEventListener('click', () => zoomImageBy(1.2));
    zoomOut.addEventListener('click', () => zoomImageBy(0.8));
    zoomReset.addEventListener('click', resetZoom);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
                case ' ': // Spacebar
                    e.preventDefault();
                    openZoom();
                    break;
            }
        }
        
        if (zoomModal.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeZoom();
                    break;
                case '+':
                case '=':
                    zoomImageBy(1.2);
                    break;
                case '-':
                    zoomImageBy(0.8);
                    break;
                case '0':
                    resetZoom();
                    break;
            }
        }
    });
    
    function openModal(category) {
        currentCategory = category;
        currentImages = photosData[category] || [];
        currentImageIndex = 0;
        
        if (currentImages.length === 0) {
            console.error(`No images found for category: ${category}`);
            return;
        }
        
        // Set modal title
        modalTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Gallery`;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Load first image
        showCurrentImage();
        createThumbnails();
        
        // Focus management
        trapFocus(modal);
        modalClose.focus();
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear thumbnails
        thumbnailsContainer.innerHTML = '';
        
        // Reset zoom
        resetZoom();
    }
    
    function showCurrentImage() {
        if (currentImages.length === 0) return;
        
        const currentImg = currentImages[currentImageIndex];
        
        // Update main image with loading effect
        mainImage.style.opacity = '0';
        
        // Preload image
        const img = new Image();
        img.onload = function() {
            mainImage.src = this.src;
            mainImage.alt = currentImg.title;
            imageTitle.textContent = currentImg.title;
            imageDescription.textContent = currentImg.description;
            
            // Fade in
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 50);
        };
        img.src = currentImg.src;
        
        // Update navigation buttons
        prevButton.disabled = currentImageIndex === 0;
        nextButton.disabled = currentImageIndex === currentImages.length - 1;
        
        // Update active thumbnail
        updateActiveThumbnail();
    }
    
    function showPreviousImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            showCurrentImage();
        }
    }
    
    function showNextImage() {
        if (currentImageIndex < currentImages.length - 1) {
            currentImageIndex++;
            showCurrentImage();
        }
    }
    
    function createThumbnails() {
        thumbnailsContainer.innerHTML = '';
        
        currentImages.forEach((img, index) => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'thumbnail-item';
            thumbnailDiv.innerHTML = `<img src="${img.src}" alt="${img.title}">`;
            
            thumbnailDiv.addEventListener('click', () => {
                currentImageIndex = index;
                showCurrentImage();
            });
            
            thumbnailsContainer.appendChild(thumbnailDiv);
        });
        
        updateActiveThumbnail();
    }
    
    function updateActiveThumbnail() {
        const thumbnails = thumbnailsContainer.querySelectorAll('.thumbnail-item');
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentImageIndex);
        });
        
        // Scroll active thumbnail into view
        const activeThumbnail = thumbnails[currentImageIndex];
        if (activeThumbnail) {
            activeThumbnail.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }
    
    function openZoom() {
        const currentImg = currentImages[currentImageIndex];
        zoomImage.src = currentImg.src;
        zoomImage.alt = currentImg.title;
        zoomModal.classList.add('active');
        resetZoom();
    }
    
    function closeZoom() {
        zoomModal.classList.remove('active');
        resetZoom();
    }
    
    function zoomImageBy(factor) {
        zoomLevel *= factor;
        zoomLevel = Math.max(0.5, Math.min(zoomLevel, 5)); // Limit zoom between 0.5x and 5x
        zoomImage.style.transform = `scale(${zoomLevel})`;
    }
    
    function resetZoom() {
        zoomLevel = 1;
        zoomImage.style.transform = 'scale(1)';
    }
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    modal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    modal.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe right - previous image
                showPreviousImage();
            } else {
                // Swipe left - next image
                showNextImage();
            }
        }
    }
    
    // Preload adjacent images for better performance
    function preloadAdjacentImages() {
        if (currentImages.length === 0) return;
        
        const preloadIndexes = [
            currentImageIndex - 1,
            currentImageIndex + 1
        ].filter(index => index >= 0 && index < currentImages.length);
        
        preloadIndexes.forEach(index => {
            const img = new Image();
            img.src = currentImages[index].src;
        });
    }
    
    // Call preload when image changes
    const originalShowCurrentImage = showCurrentImage;
    showCurrentImage = function() {
        originalShowCurrentImage();
        setTimeout(preloadAdjacentImages, 100);
    };
}

/* ========================================
   ERROR HANDLING AND LOGGING
   ======================================== */

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // In a production environment, you might want to send this to an error reporting service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault(); // Prevent default browser behavior
});

/* ========================================
   DEVELOPMENT HELPERS
   ======================================== */

// Log theme changes (useful for debugging)
window.addEventListener('themeChanged', function(e) {
    console.log(`Theme changed to: ${e.detail.theme}`);
});

// Performance monitoring (development only)
window.addEventListener('load', function() {
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('paint');
        perfData.forEach(entry => {
            console.log(`${entry.name}: ${entry.startTime}ms`);
        });
    }
});

console.log('Photos website JavaScript loaded successfully!');