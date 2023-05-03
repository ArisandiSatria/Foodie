const email = document.getElementById("email");
const password = document.getElementById("password");
const loginForm = document.getElementById("login-form");
const warning = document.getElementById("warning");

const users = localStorage.getItem("users");

const isEmailCorrect = (emailValue, emailData) => {
  return emailValue == emailData ? true : false;
};

const isPasswordCorrect = (passwordValue, passwordData) => {
  return passwordValue == passwordData ? true : false;
};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const parsedUsers = JSON.parse(users);

  parsedUsers.forEach((user) => {
    if (
      isEmailCorrect(email.value, user.emailUser) &&
      isPasswordCorrect(password.value, user.passwordUser)
    ) {
      warning.classList.add("hidden");
      warning.classList.remove("block");
      warning.textContent = "";
      location.href = "../index.html";
      console.log("OK");
    } else {
      warning.classList.remove("hidden");
      warning.classList.add("block");
      warning.textContent = "Invalid email or password! Please check again!";
    }
  });
});
