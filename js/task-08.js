
const formSubmit = document.querySelector(".login-form");
formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Пожалуйста заполните все поля!");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
});