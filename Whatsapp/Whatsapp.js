const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slideWidth = slides[0].clientWidth;
let currentSlide = 0;

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSliderPosition();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSliderPosition();
  }
});

function updateSliderPosition() {
  const offset = -currentSlide * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;

  // Remove active class from all slides and add it to the current slide
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}