
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Scroll reveal animation
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }

        // Animate stats when in view
        const stats = document.querySelector('.stats-grid');
        if (stats) {
            const statsTop = stats.getBoundingClientRect().top;
            const statItems = document.querySelectorAll('.stat-number');
            
            if (statsTop < windowHeight - 150) {
                statItems.forEach(stat => {
                    stat.style.opacity = '1';
                    stat.style.transform = 'translateY(0)';
                });
            }
        }
    }
});
