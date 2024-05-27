import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const corusel = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    slidesPerView: 3,
    loop: true,
    navigation: {
      prevEl: ".arrow-left",
      nextEl: ".arrow-right",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};
export default corusel;
