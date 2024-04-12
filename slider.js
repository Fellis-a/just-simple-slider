document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.querySelector('.slider-indicators');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });

        const indicators = document.querySelectorAll('.slider-indicator');
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    slides.forEach((slide, i) => {
        const indicator = document.createElement('div');
        indicator.classList.add('slider-indicator');
        indicator.addEventListener('click', () => {
            showSlide(i);
        });
        indicatorsContainer.appendChild(indicator);
    });

    showSlide(currentIndex);
});
