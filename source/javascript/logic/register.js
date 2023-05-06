const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const registerForm = document.getElementById("register-form");
const warning = document.getElementById("warning");

const checkCharacter = (data) => {
  const minChar = 8;
  return data.length < minChar ? false : true;
};

const checkNumberAndSymbol = (data) => {
  const regex = /^(?=.*\d)(?=.*[,.])[a-zA-Z0-9,.]+$/;
  return regex.test(data) ? true : false;
};

const checkUppercaseAndLowercase = (data) => {
  return /[a-z]/.test(data) && /[A-Z]/.test(data) ? true : false;
};

const isPasswordMatch = (data) => {
  return data === confirmPassword.value ? true : false;
};

// Password Validation
password.addEventListener("input", () => {
  const passwordChar = document.getElementById("password-char");
  const passwordNumberAndSymbol = document.getElementById(
    "password-number-and-symbol"
  );
  const passwordLowerAndUpper = document.getElementById(
    "password-lower-and-upper"
  );

  if (checkCharacter(password.value)) {
    passwordChar.classList.remove("text-slate-400");
    passwordChar.classList.add("text-green-500");
  } else {
    passwordChar.classList.remove("text-green-500");
    passwordChar.classList.add("text-slate-400");
  }

  if (checkNumberAndSymbol(password.value)) {
    passwordNumberAndSymbol.classList.remove("text-slate-400");
    passwordNumberAndSymbol.classList.add("text-green-500");
  } else {
    passwordNumberAndSymbol.classList.remove("text-green-500");
    passwordNumberAndSymbol.classList.add("text-slate-400");
  }

  if (checkUppercaseAndLowercase(password.value)) {
    passwordLowerAndUpper.classList.remove("text-slate-400");
    passwordLowerAndUpper.classList.add("text-green-500");
  } else {
    passwordLowerAndUpper.classList.remove("text-green-500");
    passwordLowerAndUpper.classList.add("text-slate-400");
  }
});

// Confirm Password
confirmPassword.addEventListener("input", () => {
  if (isPasswordMatch(password.value)) {
    warning.classList.add("hidden");
    warning.classList.remove("block");
    password.classList.remove("border-red-500");
    password.classList.add("border-green-500");
    confirmPassword.classList.remove("border-red-500");
    confirmPassword.classList.add("border-green-500");
  } else {
    warning.classList.remove("hidden");
    warning.classList.add("block");
    warning.textContent = "Password doesn't match, please check again!";
    password.classList.remove("border-green-500");
    password.classList.add("border-red-500");
    confirmPassword.classList.remove("border-green-500");
    confirmPassword.classList.add("border-red-500");
  }
});

let users = [];

const getUsers = () => {
  const usersJSON = localStorage.getItem("users");
  return usersJSON ? JSON.parse(usersJSON) : [];
};

const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

users = getUsers();

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameUser = username.value.trim();
  const emailUser = email.value.trim();
  const passwordUser = confirmPassword.value.trim();

  if (
    checkCharacter(password.value) &&
    checkNumberAndSymbol(password.value) &&
    checkUppercaseAndLowercase(password.value) &&
    username.value.length > 1 &&
    email.getAttribute("type") == "email" &&
    isPasswordMatch(password.value)
  ) {
    const user = {
      nameUser,
      emailUser,
      passwordUser,
    };

    const userRegistered = getUsers();
    userRegistered.forEach((userData) => {
      if (userData.emailUser == user.emailUser) {
        warning.classList.remove("hidden");
        warning.classList.add("block");
        warning.textContent = "Email is already registered";
        email.classList.remove("border-green-500");
        email.classList.add("border-red-500");
      } else {
        warning.classList.add("hidden");
        warning.classList.remove("block");
        email.classList.remove("border-red-500");
        email.classList.add("border-green-500");
      }
    });

    users.push(user);
    saveUsers(users);
    location.href = "onboarding-page.html";
  }
});
