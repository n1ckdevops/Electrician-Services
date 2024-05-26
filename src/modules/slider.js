const slider = () => {
  const slider = document.querySelector(".top-slider");
  const slides = slider.querySelectorAll(".item");
  const frontText = document.querySelectorAll(".top-slider .table");
  let currentSlide = 0;

  frontText.forEach((elem) => {
    elem.style.visibility = "visible";
    elem.style.opacity = 1;
  });

  const autoSlide = () => {
    slides[currentSlide].style.display = "none";
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    slides[currentSlide].style.display = "block";
  };
  const startSlide = () => {
    setInterval(autoSlide, 2000);
  };

  startSlide();
};

export default slider;
