const burger = document.querySelector('#burger');
const burgerSlide = document.querySelector('.burger-slide');

burger.addEventListener('click', () => {
    burgerSlide.classList.toggle('disp'); 
});