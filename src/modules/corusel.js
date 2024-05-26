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
  });
};
export default corusel;
