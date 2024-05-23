import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const buttons = document.querySelectorAll(".callback-btn");
  const btnServices = document.querySelector(".button-services");
  const fancy = document.querySelectorAll(".fancyboxModal");

  console.log(fancy);
  // Плавное анимирование
  const animateModal = () => {
    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modal.style.opacity = progress;
        modalOverlay.style.opacity = progress;
      },
    });
  };

  // Открытие модального окна
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      modalOverlay.style.display = "block";
      animateModal();
    });
  });
  // Открытие модального окна на "Не нашли нужной услуги?"
  btnServices.addEventListener("click", () => {
    modal.style.display = "block";
    modalOverlay.style.display = "block";

    animateModal();
  });

  // Закрытие модального окна
  document.addEventListener("click", (e) => {
    if (
      e.target.matches(".modal-overlay") ||
      e.target.matches(".modal-close")
    ) {
      modal.style.display = "none";
      modalOverlay.style.display = "none";
    }
  });
};

export default modal;
