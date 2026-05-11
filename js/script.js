document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (toggle) {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('show');
        });
    }

    // Закрытие при клике вне меню
    document.addEventListener('click', function(event) {
        if (navLinks && navLinks.classList.contains('show')) {
            if (!toggle.contains(event.target)) {
                navLinks.classList.remove('show');
            }
        }
    });

    // Закрытие при клике на ссылку
    if (navLinks) {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('show');
            });
        });
    }

    // Закрытие при скролле
    window.addEventListener('scroll', function() {
        if (navLinks && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});
