import Swiper from "swiper";

const corusel = () => {
  console.log("hey");
  document.addEventListener("click", (e) => {
    console.log(e.target);
  });

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 3,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
export default corusel;
