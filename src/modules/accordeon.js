const accordeon = () => {
  const titles = document.querySelectorAll(".accordeon .title");

  titles.forEach((title) => {
    title.addEventListener("click", () => {
      const currentElement = title.parentNode;
      const isActive = currentElement.classList.contains("active");

      // закрываем элементы
      document.querySelectorAll(".accordeon .element").forEach((element) => {
        element.classList.remove("active");
        element.querySelector(".element-content").style.display = "none";
      });

      // открываем элемент если не был активен он
      if (!isActive) {
        currentElement.classList.add("active");
        currentElement.querySelector(".element-content").style.display =
          "block";
      }
    });
  });
};

export default accordeon;
