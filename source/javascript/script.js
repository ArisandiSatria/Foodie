function checkTitle() {
  if (document.title === "Foodie") {
    let point = "";
    return point;
  } else {
    let point = "../";
    return point;
  }
}

// Memanggil file homepage.js
document.write(
  `<script src="${checkTitle()}source/javascript/homePage.js"></script>`
);

// Memanggil file loadHeaderFooter.js
document.write(
  `<script src="${checkTitle()}source/javascript/loadHeaderFooter.js"></script>`
);

// Memanggil file bmi.js
document.write(
  `<script src="${checkTitle()}source/javascript/logic/bmi.js"></script>`
);

// memanggil file register.js
document.write(
  `<script src="${checkTitle()}source/javascript/logic/register.js"></script>`
);
// memanggil file register.js
document.write(
  `<script src="${checkTitle()}source/javascript/logic/session.js"></script>`
);

document.write(
  `<script src="${checkTitle()}source/javascript/logic/logout.js"></script>`
);
document.write(
  `<script src="${checkTitle()}source/javascript/logic/weightHistory.js"></script>`
);
document.write(
  `<script src="${checkTitle()}source/javascript/logic/profile.js"></script>`
);

window.onload = function () {
  let navbarItems = document.querySelectorAll(".navbar-item");
  for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener("click", function (event) {
      let targetId = this.getAttribute("href").substring(1);

      let targetElement = document.getElementById(targetId);

      let targetOffset = targetElement.offsetTop;

      let offset = 150;
      let scrollTo = targetOffset - offset;

      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });

      event.preventDefault();
    });
  }
};


