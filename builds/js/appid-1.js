// PERFORMANCE OPTIMIZED ANIMATIONS & INTERACTIVITY
document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. INTERSECTION OBSERVER (Scroll Animations) */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    /* 2. MOBILE NAVIGATION LOGIC (New) */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    function toggleMenu() {
        const isOpen = nav.classList.contains('active');
        
        mobileBtn.classList.toggle('open');
        nav.classList.toggle('active');
        
        // Prevent background scrolling when menu is open
        if (!isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }

        // Accessibility updates
        mobileBtn.setAttribute('aria-expanded', !isOpen);
    }

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // Close menu on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && nav.classList.contains('active')) {
                toggleMenu();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    }
});