// Mendapatkan data session pengguna dari session storage
let getSession = JSON.parse(localStorage.getItem("sessionData"));
let access = document.getElementById("access")
// console.log(getSession.isLoggedIn);
// Menggunakan data session pengguna
if (getSession.isLoggedIn == true) {
    // console.log(`Halo ${getSession.email}, Anda telah login`);
    access.innerHTML = `<a  href="page/Profile.html">Profile</a></button>`
} else {
    // windows.location.href = `index.html`
    console.log("ok");
}