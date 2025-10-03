// Smooth scroll for nav links
// Highlight nav button when section is in view

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for nav links (both desktop and mobile)
    function addSmoothScroll(selector) {
        document.querySelectorAll(selector).forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
                    // If mobile menu is open, close it after click
                    if (window.innerWidth < 768) {
                        document.getElementById('mobile-menu').classList.add('hidden');
                    }
                }
            });
        });
    }
    addSmoothScroll('a.nav-link');
    addSmoothScroll('#mobile-menu a.nav-link');

    // Highlight nav button when section is in view
    const sections = ['#services', '#portfolio', '#contact'];
    const navLinks = Array.from(document.querySelectorAll('a.nav-link'));
    window.addEventListener('scroll', () => {
        let current = '';
        for (const id of sections) {
            const section = document.querySelector(id);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom > 120) {
                    current = id;
                }
            }
        }
        navLinks.forEach(link => {
            if (link.getAttribute('href') === current) {
                link.classList.add('font-extrabold', 'underline', 'text-yellow-300');
            } else {
                link.classList.remove('font-extrabold', 'underline', 'text-yellow-300');
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        // Hide menu on resize to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Translation button for mobile
    const translateBtn = document.getElementById('translate-btn');
    const translateBtnMobile = document.getElementById('translate-btn-mobile');
    if (translateBtn && translateBtnMobile) {
        translateBtnMobile.addEventListener('click', function() {
            translateBtn.click();
            mobileMenu.classList.add('hidden');
        });
    }
});
