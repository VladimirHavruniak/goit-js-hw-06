const formEl = document.querySelector(".login-form");

const toRegisterUser = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;
    if (email.value === "" || password.value === "") {
      alert("Dсе поля должны быть заполнены!");
      return;
    }
  const result = {
    email: email.value,
    password: password.value
  }
    console.log(result);
    event.target.reset();
};
formEl.addEventListener("submit", toRegisterUser);
