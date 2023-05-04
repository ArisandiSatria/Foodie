
const getDataUser = JSON.parse(localStorage.getItem('users'));
let usernameProfile = document.getElementById("usernameProfile")
let lastDateBmi = document.getElementById("lastDateBmi")
let lastBmi = document.getElementById("lastBmi")
let lastStatusBmi = document.getElementById("lastStatusBmi")
// let statusBmiValue = document.getElementById("status")
// let dateValue = document.getElementById("date")

// let tbody = document.getElementById("tbody")
// filter agar yang ditampilkan berdasarkan user yang login
let filteredUser = getDataUser.filter(function (user) {
    return user.emailUser === getSession.email;
});

// console.log(filteredUser);
usernameProfile.innerText = filteredUser[0].nameUser
let lastDataBmi = filteredBmi[filteredBmi.length - 1];

lastDateBmi.innerText = lastDataBmi.today
lastBmi.innerText = lastDataBmi.result
lastStatusBmi.innerText = lastDataBmi.status

