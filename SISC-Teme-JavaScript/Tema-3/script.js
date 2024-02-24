const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;

function showSlide(index)
{
    if (index < 0)
        slideIndex = slides.length - 1;
    else if (index >= slides.length)
        slideIndex = 0;

    for (let i = 0; i < slides.length; i++)
        slides[i].style.display = 'none';

    slides[slideIndex].style.display = 'block';
}

prevBtn.addEventListener('click', () =>
{
    slideIndex--;
    showSlide(slideIndex);
});

nextBtn.addEventListener('click', () =>
{
    slideIndex++;
    showSlide(slideIndex);
});

showSlide(slideIndex);
