document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggle) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Скрывать соцкнопки при скролле
    window.addEventListener('scroll', function() {
        var socialButtons = document.getElementById('socialButtons');
        if (socialButtons && socialButtons.classList.contains('active')) {
            socialButtons.classList.remove('active');
        }
    });

    // Принудительно убираем анимацию кнопки троеточия на мобильных
    if (window.innerWidth <= 768) {
        var toggleBtn = document.querySelector('.social-toggle');
        if (toggleBtn) {
            toggleBtn.style.transition = 'none';
            toggleBtn.style.transform = 'none';
        }
    }
});
