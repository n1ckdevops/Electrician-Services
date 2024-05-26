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
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
};
export default corusel;
