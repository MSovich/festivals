document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggle) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});

// Скрыть верхнюю панель на мобильных устройствах
function hideTopBarOnMobile() {
    if (window.innerWidth <= 768) {
        const topBar = document.querySelector('.top-bar');
        if (topBar) {
            topBar.style.display = 'none';
        }
    }
}

// Вызвать при загрузке и при изменении размера окна
window.addEventListener('load', hideTopBarOnMobile);
window.addEventListener('resize', hideTopBarOnMobile);
