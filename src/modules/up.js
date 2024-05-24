const up = () => {
  const arrowUp = document.querySelector(".up");
  const secondSection = document.querySelector(".services-section");

  arrowUp.style.display = "none";
  // делаем скроллинг
  window.addEventListener("scroll", () => {
    // топ второй секции
    const secondSectionTop = secondSection.offsetTop;
    // если скролл больше или == топу второй секции
    if (window.scrollY >= secondSectionTop) {
      // появляется стрелка вверх
      arrowUp.style.display = "block";
      // иначе ее вообще нет
    } else {
      arrowUp.style.display = "none";
    }
  });

  // клик по стрелке для плавного возврата в топ.
  arrowUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

export default up;
