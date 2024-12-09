document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.slide-container');
    const slideImage = slideContainer.querySelector('img');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const bulletWrapper = document.querySelector('.bullets-wrapper');
    const bullets = bulletWrapper.querySelectorAll('a');
    
    const slides = [
        'src/img/slide.jpg',
        'src/img/slide1.jpg',
        'src/img/slide2.jpg'
    ];

    let currentSlideIndex = 0;

    function updateSlide(index) {
        currentSlideIndex = (index + slides.length) % slides.length;
        
        slideImage.src = slides[currentSlideIndex];
        
        bullets.forEach((bullet, i) => {
            bullet.classList.toggle('bg-gray-600', i === currentSlideIndex);
            bullet.classList.toggle('bg-gray-400', i !== currentSlideIndex);
        });
    }

    rightBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateSlide(currentSlideIndex + 1);
    });

    leftBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateSlide(currentSlideIndex - 1);
    });

    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', (e) => {
            e.preventDefault();
            updateSlide(index);
        });
    });

    function autoSlide() {
        updateSlide(currentSlideIndex + 1);
    }

    let autoSlideInterval = setInterval(autoSlide, 4000);

    updateSlide(0);
  });