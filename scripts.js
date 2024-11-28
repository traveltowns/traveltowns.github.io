
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

    
    if (scrollPosition > 50) { 
        arrow.style.opacity = '0';
    } else {
        arrow.style.opacity = '1';
    }
});


const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        scrollToTopButton.style.display = 'flex'; 
    } else {
        scrollToTopButton.style.display = 'none'; 
    }
});


scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

function openPopup(imageSrc1, imageSrc2, description) {
    document.getElementById('popup-image-1').src = imageSrc1;
    document.getElementById('popup-image-2').src = imageSrc2;
    document.getElementById('popup-description').innerText = description;
    
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; 
    setTimeout(() => {
        popup.classList.add('show'); 
    }, 10); 
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show'); 
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); 
}
