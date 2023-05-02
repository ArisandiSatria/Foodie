const formInputBmi = document.getElementById("input-bmi");
const formOutputBmi = document.getElementById("output-bmi");
const titleSpan = document.getElementById("title-span");

const faqWarp = document.getElementById("faq-warp");
const recommend = document.getElementById("recommend");

const error = document.querySelectorAll(".error");
const formBmi = document.getElementById("form-bmi");

const resultValue = document.getElementById("result-value");
const statusValue = document.getElementById("info-bmi");

//get gender
function getGender() {
  let gender = document.getElementsByName("gender");

  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) return gender[i].value;
  }
}

// validate
function validate() {
  let heightBody = document.getElementById("heightBody").value;
  let weightBody = document.getElementById("weightBody").value;

  function validateGender() {
    if (getGender() != null) {
      error[0].innerText = "";
      return true;
    } else {
      error[0].innerText = "Pilih jenis kelaminmu";
    }
  }

  function validateHeight() {
    if (heightBody != "") {
      let firstNumber = parseInt(heightBody.split("")[0]);

      if (firstNumber != 0) {
        if (heightBody < 289) {
          if (heightBody > 54) {
            error[1].innerText = "";
            return true;
          } else {
            error[1].innerText = "Manusia terpendek di dunia 54 cm :D";
          }
        } else {
          error[1].innerText = "Manusia tertinggi di dunia 289 cm :D";
        }
      } else {
        error[1].innerText = "Digit pertama tidak boleh 0";
      }
    } else {
      error[1].innerText = "Masukkan tinggi badanmu";
    }
  }

  function validateWeight() {
    if (weightBody != "") {
      let firstNumber = parseInt(weightBody.split("")[0]);

      if (firstNumber != 0) {
        if (weightBody < 600) {
          if (weightBody > 6) {
            error[2].innerText = "";
            return true;
          } else {
            error[2].innerText = "Manusia terkecil di dunia 6 kg :D";
          }
        } else {
          error[2].innerText = "Manusia terberat di dunia 600 kg :D";
        }
      } else {
        error[2].innerText = "Digit pertama tidak boleh 0";
      }
    } else {
      error[2].innerText = "Masukkan berat badanmu";
    }
  }

  validateGender();
  validateHeight();
  validateWeight();

  if (
    validateGender() == true &&
    validateHeight() == true &&
    validateWeight() == true
  ) {
    return true;
  }
}

function resultBmi(x, y) {
  return (y / ((x / 100) * (x / 100))).toFixed(1);
}

function statusBmi(result) {
  if (result < 18.5) {
    return "Kurus";
  } else if (result >= 18.5 && result <= 24.9) {
    return "Normal";
  } else if (result >= 25 && result <= 29.9) {
    return "Gemuk";
  } else {
    return "Obesitas";
  }
}

function bgStatusAndNumber(status) {
  const bgStatus = document.querySelectorAll(".info-weight-body");
  const bgNumber = document.querySelectorAll(".info-weight-number");

  if (status === "Kurus") {
    bgStatus[0].classList.remove("text-700");
    bgStatus[0].classList.add("bg-yellow");
    bgNumber[0].classList.remove("text-700");
    bgNumber[0].classList.add("bg-yellow");
  } else if (status === "Normal") {
    bgStatus[1].classList.remove("text-700");
    bgStatus[1].classList.add("bg-normal");
    bgNumber[1].classList.remove("text-700");
    bgNumber[1].classList.add("bg-normal");
  } else if (status === "Gemuk") {
    bgStatus[2].classList.remove("text-700");
    bgStatus[2].classList.add("bg-yellow");
    bgNumber[2].classList.remove("text-700");
    bgNumber[2].classList.add("bg-yellow");
  } else {
    bgStatus[3].classList.remove("text-700");
    bgStatus[3].classList.add("bg-red");
    bgNumber[3].classList.remove("text-700");
    bgNumber[3].classList.add("bg-red");
  }
}

function textBmi(status) {
  const textBmiValue = document.getElementById("text-bmi");
  if (status === "Normal") {
    textBmiValue.innerText =
      "Pastikan asupan kalori sesuai dengan kebutuhan kalori harian";
  } else {
    textBmiValue.innerText =
      "Utamakan hidup sehat dan perhatikan konsumsi harian";
  }
}

function recommendText(status) {
  const underweight = document.getElementById("recommend-underweight");
  const normal = document.getElementById("recommend-normal");
  const overweight = document.getElementById("recommend-overweight");

  if (status === "Kurus") {
    underweight.classList.remove("display-none");
  } else if (status === "Normal") {
    normal.classList.remove("display-none");
  } else {
    overweight.classList.remove("display-none");
  }
}
function img(status, gender) {
  const imgStatus = document.getElementById("img");

  if (status === "Kurus" && gender === "female") {
    imgStatus.innerHTML = `<img src="../source/images/bmi/thin f.png"  />`;
  } else if (status === "Normal" && gender === "female") {
    imgStatus.innerHTML = `<img src="../source/images/bmi/normal f.png"  />`;
  } else if (status === "Gemuk" && gender === "female") {
    imgStatus.innerHTML = `<img src="../source/images/bmi/obesity f.png"  />`;
  } else if (status === "Obesitas" && gender === "female") {
    imgStatus.innerHTML = `<img src="../source/images/bmi/obesity f.png"  />`;
  } else if (status === "Kurus" && gender === "male") {
    imgStatus.innerHTML = `<img src="../source/images/bmi/thin m.png"  />`;
  } else if (status === "Normal" && gender === "male") {
    imgStatus.innerHTML = `<img src="../source/images/bmi/normal m.png"  />`;
  } else if (status === "Gemuk" && gender === "male") {
    imgStatus.innerHTML = `<img src="../source/images/bmi/obesity m.png"  />`;
  } else if (status === "Obesitas" && gender === "male") {
    imgStatus.innerHTML = `<img src="../source/images/bmi/obesity m.png"  />`;
  }
}

//calculate
function calculate() {
  if (validate() == true) {
    formInputBmi.classList.add("display-none");
    formOutputBmi.classList.remove("display-none");
    titleSpan.classList.add("display-none");

    const height = heightBody.value;
    const weight = weightBody.value;
    const result = resultBmi(height, weight);
    const status = statusBmi(result);

    bgStatusAndNumber(status);
    textBmi(status);
    recommendText(status);
    img(status, getGender());

    resultValue.innerText = result;
    statusValue.innerText = status;

    faqWarp.classList.add("display-none");
    recommend.classList.remove("display-none");
  }
}

function back() {
  formInputBmi.classList.remove("display-none");
  formOutputBmi.classList.add("display-none");
  titleSpan.classList.remove("display-none");

  faqWarp.classList.remove("display-none");
  recommend.classList.add("display-none");

  location.reload();
  formBmi.reset();
}

// QnA
let faq = document.getElementsByClassName("faq-page");
let i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}
