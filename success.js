document.addEventListener("DOMContentLoaded", () => {
  const email = localStorage.getItem("subscribedEmail");
  if (email) {
    document.getElementById("user-email").textContent = email;
  }

  document.querySelector(".dismiss-btn").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
