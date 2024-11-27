
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
    if (scrollPosition > 50) { 
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
// function openPopup(imageSrc1, imageSrc2, description) {
//     document.getElementById('popup-image-1').src = imageSrc1;
//     document.getElementById('popup-image-2').src = imageSrc2;
//     document.getElementById('popup-description').innerText = description;
//     document.getElementById('popup').style.display = 'flex';
// }

// function closePopup() {
//     document.getElementById('popup').style.display = 'none';
// }
function openPopup(imageSrc1, imageSrc2, description) {
    document.getElementById('popup-image-1').src = imageSrc1;
    document.getElementById('popup-image-2').src = imageSrc2;
    document.getElementById('popup-description').innerText = description;
    
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; // Показываем поп-ап
    setTimeout(() => {
        popup.classList.add('show'); // Добавляем класс для показа поп-апа
    }, 10); // Небольшая задержка для активации анимации
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show'); // Убираем класс для скрытия поп-апа

    // Удаляем изображения и текст после завершения анимации
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Время должно совпадать с временем анимации
}
