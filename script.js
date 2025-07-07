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
    localStorage.setItem("subscribedEmail", email);
    window.location.href = "success.html";
  }
});
