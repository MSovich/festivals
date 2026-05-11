document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Функция закрытия меню
    function closeMenu() {
        if (navLinks && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    }

    // Открытие/закрытие по клику на бургер
    if (toggle) {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('show');
        });
    }

    // Закрытие при клике на любую ссылку внутри меню
    if (navLinks) {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Закрытие при прокрутке страницы
    window.addEventListener('scroll', closeMenu);

    // Закрытие при клике в любое место страницы, если меню открыто, и клик не по бургеру
    document.addEventListener('click', function(event) {
        if (navLinks && navLinks.classList.contains('show')) {
            if (toggle && !toggle.contains(event.target)) {
                closeMenu();
            }
        }
    });
});
