function checkTitle() {
  if (document.title === "Foodie") {
    let point = "";
    return point;
  } else {
    let point = "../";
    return point;
  }
}

console.log(checkTitle());
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
