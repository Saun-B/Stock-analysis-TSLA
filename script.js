
document.addEventListener('DOMContentLoaded', function() {
    const elementsToFadeIn = document.querySelectorAll('.section-padding, .content-card-rounded, .chart-card-rounded, .recommendation-box, .site-footer, .comparison-intro-cards, .four-card-grid');
    const fadeInOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        elementsToFadeIn.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();

    const navLinks = document.querySelectorAll('.nav-menu a.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function smoothScroll(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('#navbar').offsetHeight,
                behavior: 'smooth'
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    function updateActiveNavLink() {
        let currentActiveSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - document.querySelector('#navbar').offsetHeight - 50;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentActiveSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentActiveSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();
});

window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        let scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = -scrollPosition * 0.3 + 'px';
    }
});