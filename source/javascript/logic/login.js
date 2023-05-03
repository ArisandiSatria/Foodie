const email = document.getElementById("email");
const password = document.getElementById("password");
const loginForm = document.getElementById("login-form");

const users = localStorage.getItem("users");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const parsedUsers = JSON.parse(users);

  parsedUsers.forEach((user) => {
    if (email.value == user.emailUser && password.value == user.passwordUser) {
      console.log("Ok");
    }
  });
});
