const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

confirmPassword.addEventListener("input", function () {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwörter stimmen nicht überein");
  } else {
    confirmPassword.setCustomValidity("");
  }
});
