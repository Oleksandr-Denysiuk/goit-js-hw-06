const form = document.querySelector(".login-form");

const userProfile = {};

const formSubmit = (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const emailInput = formElements.email.value;
  const passwordInput = formElements.password.value;

  if (emailInput === "" || passwordInput === "") {
    return alert(" Please, fill in all fields!");
  } else {
    userProfile.email = emailInput;
    userProfile.password = passwordInput;
  }

  console.log(userProfile);
  event.currentTarget.reset();
};

form.addEventListener("submit", formSubmit);
