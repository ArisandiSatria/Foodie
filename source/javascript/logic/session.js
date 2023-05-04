// Mendapatkan data session pengguna dari session storage
let getSession = JSON.parse(localStorage.getItem("sessionData"));
let access = document.getElementById("access");

// Menggunakan data session pengguna
if (getSession.isLoggedIn == true) {
  // console.log(`Halo ${getSession.email}, Anda telah login`);
  access.innerHTML = `<a href="${
    currentUrl.includes("/page")
      ? "../page/profile.html"
      : "./page/profile.html"
  }"><button type="button" class="text-white font-medium bg-gradient-to-br from-amber-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1 text-center my-0">
                        Profile
                      </button></a>`;
}
