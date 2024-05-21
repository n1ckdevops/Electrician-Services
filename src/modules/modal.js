const modal = () => {
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");
  const button = document.querySelector(".callback-btn");

  document.addEventListener("click", (e) => {
    if (e.target.matches(".callback-btn")) {
      modal.style.display = "block";
      modalOverlay.style.display = "block";
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
