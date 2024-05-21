const scroll = () => {
  const links = document.querySelectorAll("ul li a");
  // #contacts/#faq/#services

  const scrollTo = (targetId) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // console.log("Работает!");
      const targetId = link.getAttribute("href").substring(1);
      scrollTo(targetId);
    });
  });
};

export default scroll;
