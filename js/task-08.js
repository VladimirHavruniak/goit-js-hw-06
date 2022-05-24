const formEl = document.querySelector(".login-form");

const toRegisterUser = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;
    if (email.value === "" || password.value === "") {
        alert("Dсе поля должны быть заполнены!");
    }
    console.log(`email:${email.value}, password:${password.value}`);
    event.target.reset();
};
formEl.addEventListener("submit", toRegisterUser);
