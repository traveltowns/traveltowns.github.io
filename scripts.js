
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const arrow = document.querySelector('.ims');
    
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Устанавливаем прозрачность стрелки в зависимости от положения прокрутки
    if (scrollPosition > 50) { // Измените 50 на нужное значение для триггера
        arrow.style.opacity = '0';
    } else {
        arrow.style.opacity = '1';
    }
});

// scripts.js
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Порог, при котором стрелка появляется
        scrollToTopButton.style.display = 'flex'; // Показываем стрелку
    } else {
        scrollToTopButton.style.display = 'none'; // Скрываем стрелку
    }
});

// Добавляем плавный скролл при нажатии на стрелку
scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавный скролл
    });
});