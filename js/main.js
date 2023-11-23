const headingElement = document.getElementById("heading");
const inputElement = document.getElementById("input-comment");
const buttonElement = document.getElementById("input-button");

buttonElement.addEventListener("click", function (event) {
    let enteredName = inputElement.value;

  if (enteredName !== "") {
    headingElement.innerText = "Thank you ";
  }
});
