import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  // const modalClose = document.querySelector(".modal-close");
  const buttons = document.querySelectorAll(".callback-btn");

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

  document.addEventListener("click", (e) => {
    if (e.target.matches(".callback-btn")) {
      modal.style.display = "block";
      modalOverlay.style.display = "block";
      animateModal();
    }
  });
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
