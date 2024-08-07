const form = document.getElementById("form");
const userName = document.getElementById("name");
const company = document.getElementById("company");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const textArea = document.getElementById("message");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement; //gets the parent elemenrt which is a div with form-control class
  formControl.className = "form-control error"; // re-writing the class form-control and adding error class on the div.
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check required
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Get Field Name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([userName, email, textArea]);
  checkLength(userName, 2, 18);
  checkEmail(email);
});
