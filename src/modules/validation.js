const validation = () => {
  const users = document.querySelectorAll('[name="fio"]');
  const phones = document.querySelectorAll('[name="tel"]');
  console.log(phones);
  users.forEach((user) => {
    user.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ]+/, "");
    });
  });
  phones.forEach((phone) => {
    phone.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9\+]+/, "");
    });
  });
};

export default validation;
