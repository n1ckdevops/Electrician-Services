const sendForm = () => {
  const form = document.querySelector("[name='form-callback']");
  const statusBlock = document.createElement("div");
  const loadText = "Loading...";
  const errorText = "Error!";
  const successText = "Success!";
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");

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
    const valueInput = document.querySelector(".required");
    const formData = new FormData(form);
    const formBody = {};

    if (valueInput.value === "") {
      alert("Необходимо ввести номер телефона");
    } else {
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
    }
  });
};

export default sendForm;
