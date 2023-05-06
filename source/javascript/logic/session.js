// Mendapatkan data session pengguna dari session storage
let getSession = JSON.parse(localStorage.getItem("sessionData"));
let access = document.getElementById("access");

// Menggunakan data session pengguna
if (getSession == null) {
  if (
    currentUrl.includes("index") ||
    currentUrl.includes("onboarding-page.html")
  ) {
    null;
  } else {
    window.location.href = "../index.html";
  }
} else {
  access.innerHTML = `<a href="${
    currentUrl.includes("/page")
      ? "../page/profile.html"
      : "./page/profile.html"
  }"><button type="button" class="text-white font-semibold bg-yellow-500 hover:bg-yellow-400 0 rounded-lg text-sm px-5 py-1.5 text-center mr-2">
                    Profile
                  </button></a>`;
}
