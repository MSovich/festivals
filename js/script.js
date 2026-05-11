document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    let overlay = document.querySelector('.menu-overlay');

    // Создаём оверлей, если его нет
    if (!overlay && navLinks) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    function openMenu() {
        navLinks.classList.add('show');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // блокируем скролл
    }

    function closeMenu() {
        navLinks.classList.remove('show');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Открытие по клику на бургер
    if (toggle) {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            if (navLinks.classList.contains('show')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    // Закрытие при клике на оверлей
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Закрытие при клике на любую ссылку внутри меню
    if (navLinks) {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Закрытие при прокрутке страницы (только если меню открыто)
    window.addEventListener('scroll', function() {
        if (navLinks && navLinks.classList.contains('show')) {
            closeMenu();
        }
    });
});
