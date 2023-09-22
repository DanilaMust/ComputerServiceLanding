export function cooperationSlider () {
    // Исходные данные
    const   slider = document.querySelector('.slider'),
            sliderLine = document.querySelector(".slider__line"), 
            sliderContent = document.querySelectorAll(".slider__content"), 
            sliderWrapper = document.querySelector(".slider__wrapper"), 
            sliderDots = document.querySelectorAll(".slider__dot"); 
    
    // Переменные
    let sliderCount = 0,
        sliderWidth;

    // Адаптивность слайдера
    window.addEventListener('resize', showSlide);

    // Функции
    function showSlide() {
        sliderWidth = document.querySelector('.slider').offsetWidth;
        sliderLine.width = sliderWidth * sliderContent.length + 'px';
        sliderContent.forEach (item => item.style.width = sliderWidth + 'px');
    }
    showSlide();

    // Слайд вперед
    function nextSlide() {
        sliderCount++;
        if (sliderCount >= sliderContent.length) sliderCount = 0;
        rollSlider();
        currentSlide(sliderCount);
    }

    // Слайд назад
    function prevSlide() {
        sliderCount--;
        if (sliderCount < 0 ) sliderCount = sliderContent.length - 1;
        rollSlider();
        currentSlide(sliderCount);
    }

    // Задает шаг перемещения слайдов
    function rollSlider() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    }

    // Текущий слайд
    function currentSlide(index) {
        sliderDots.forEach(item => item.classList.remove('active'));
        sliderDots[index].classList.add('active');
    }

    // Пагинация
    sliderDots.forEach( (dot,index) => {
        dot.addEventListener('click', () => {
            sliderCount = index;
            rollSlider();
            currentSlide(sliderCount);
        })
    })
}


