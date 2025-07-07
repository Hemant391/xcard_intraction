document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const errorMsg = document.getElementById("error-msg");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    errorMsg.style.display = "block";
    emailInput.classList.add("input-error");
  } else {
    errorMsg.style.display = "none";
    emailInput.classList.remove("input-error");
    document.getElementById("form-section").style.display = "none";
    document.getElementById("success-section").style.display = "block";
    document.getElementById("user-email").textContent = email;
  }
});
