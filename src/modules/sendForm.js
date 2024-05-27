const sendForm = () => {
  const form = document.querySelector("[name='form-callback']");
  const statusBlock = document.createElement("div");
  const loadText = "Loading...";

  const successText = "Success!";
  const valueInputs = document.querySelectorAll(".required");

  const validateMinLength = (input, minLength) => {
    const value = input.value.trim();
    if (value.length < minLength) {
      input.setCustomValidity(`Минимальная длина 11 символов`);
    } else {
      input.setCustomValidity("");
    }
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formElements = form.querySelectorAll(".form-control");

    const formData = new FormData(form);
    const formBody = {};

    valueInputs.forEach((el) => {
      el.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9()\-\+]+/, "");
        validateMinLength(e.target, 11);
      });
    });

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((key, value) => {
      formBody[value] = key;
    });
    sendData(formBody).then((data) => {
      statusBlock.textContent = successText;
      formElements.forEach((input) => {
        input.value = "";
      });

      setTimeout(() => {
        statusBlock.remove();
      }, 2000);
    });
  });
};

export default sendForm;
