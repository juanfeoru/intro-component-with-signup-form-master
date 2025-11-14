const inputs = document.querySelectorAll("input");
const form = document.querySelector(".form");
const errorText = document.querySelectorAll(".form__group-error-text");
const errorIcon = document.querySelectorAll(".form__group-error-icon");

const messages = {
  0: "First Name cannot be empty",
  1: "Last Name cannot be empty",
  2: "Email cannot be empty",
  3: "Password cannot be empty",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input, index) => {
    const value = input.value.trim();

    errorText[index].style.visibility = "hidden";
    errorText[index].textContent = "";
    errorIcon[index].style.display = "none";
    input.style.border = "1px solid hsla(249, 10%, 26%, 0.3)";
    input.style.color = "hsl(249, 10%, 26%)";

    if (value === "") {
      showError(index, messages[index]);
      input.placeholder = "";
      return;
    }

    if (index === 2 && value !== "" && !emailPattern.test(input.value)) {
      showError(index, "Looks like this is not an email");
    }
  });
});

function showError(index, message) {
    errorText[index].textContent = message
    errorText[index].style.visibility = "visible";
    errorIcon[index].style.display = "block";
    inputs[index].style.border = "2px solid var(--red-400)";
    inputs[index].style.color = "hsl(0, 100%, 74%)";
}
