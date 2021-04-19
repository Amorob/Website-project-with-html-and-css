// Variables declarations
// const mobileMenuOpen = document.querySelector(".mobile-menu-open");
// const mobileMenuClose = document.querySelector(".mobile-menu-close");
// const mobileLogo = document.querySelector("#logo-mobile");
// event listener for bars button
// mobileMenuOpen.addEventListener("click", function () {
//   mobileMenuClose.classList.remove("mobile-menu-close");
//   mobileMenuOpen.classList.add("mobile-menu-close");
//   mobileLogo.classList.add("hide");
// });
// event listener for times button
// mobileMenuClose.addEventListener("click", function () {
//   mobileMenuOpen.classList.remove("mobile-menu-close");
//   mobileMenuClose.classList.add("mobile-menu-close");
//   mobileLogo.classList.remove("hide");
// });
// contact form variables declations
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

// add event listener to submit button
submit.addEventListener("click", function (e) {
  validateName();
  validateEmail();
  validatePhone();
  validateMessage();
  displayValues();
  clearFields();
  e.preventDefault();
});
// validateName function
function validateName() {
  if (name.value.trim() === "") {
    alert("Name field is required and can not be Empty");
    return false;
  }
}
// validateEmail function
function validateEmail() {
  if (email.value.trim() === "") {
    alert("Email field is required and can not be Empty");
    return false;
  }
}
// validate phone function
function validatePhone() {
  if (phone.value.trim() === "") {
    alert("Phone Number field is required and can not be Empty");
    return false;
  }
  if (phone.value.length < 10) {
    alert("Number of digits of your phone number can not be less than 10");
    return false;
  }
  if (phone.value.length > 10) {
    alert("Number of digits of your phone number can not be more than 10");
    return false;
  }
  if (isNaN(phone.value)) {
    alert("Phone number must contain only numeric values");
    return false;
  }
}
// validateMessage function
function validateMessage() {
  if (message.value.trim() === "") {
    alert("Message field is required and can not be Empty");
    return false;
  }
}
// displayValues function
function displayValues() {
  alert(
    "Name: " +
      name.value +
      ", " +
      "Email: " +
      email.value +
      ", " +
      "Phone: " +
      phone.value +
      ", " +
      "Your Message: " +
      message.value
  );
}
// clearFields function
function clearFields() {
  name.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
}
