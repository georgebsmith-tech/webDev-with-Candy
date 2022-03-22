const inputHolder = document.querySelector("input");
const strengthWrapper = document.querySelector(".strength-wrapper");
const strength = document.querySelector(".strength");
const indic = document.querySelector(".indicator");

function checkStrength() {
  let password = inputHolder.value;
  let passwordLength = password.length;
  if (passwordLength > 0 && passwordLength <= 8) {
    strength.innerText = "Weak";
    indic.classList.add("weak");
    indic.classList.remove("moderate");
    indic.classList.remove("strong");
  } else if (passwordLength > 8 && passwordLength <= 14) {
    strength.innerText = "Moderate";
    indic.classList.add("moderate");
    indic.classList.remove("weak");
    indic.classList.remove("strong");
  } else {
    strength.innerText = "Strong";
    indic.classList.add("strong");
  }
  if (passwordLength >= 1) {
    strengthWrapper.style.display = "block";
  } else {
    strengthWrapper.style.display = "none";
  }
  console.log(indic.classList);
}
