const slider = () => {
  // const imgSlider = document.querySelectorAll(".item.relative");
  // const slider = document.querySelector(".top-slider");
  // console.log(imgSlider);
  // console.log(slider);
  // imgSlider.forEach((slider) => {
  //   slider.addEventListener("click", () => {});
  // });
  //
  //   const slider = document.querySelector(".top-slider");
  //   const slides = slider.querySelectorAll(".item");
  //   let currentSlide = 0;
  //   setInterval(() => {
  //     slides[currentSlide].classList.remove("active");
  //     currentSlide = (currentSlide + 1) % slides.length;
  //     slides[currentSlide].classList.add("active");
  //   }, 5000);
  document.addEventListener("click", (e) => {
    console.log(e.target);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".top-slider");
    const slides = slider.querySelectorAll(".item");
    let currentSlide = 0;

    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 1000); // Интервал переключения в миллисекундах (здесь 5000 = 5 секунд)
  });
};

export default slider;
