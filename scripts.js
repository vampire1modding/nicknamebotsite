window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const loginContainer = document.getElementById("loginContainer");
  const dashboard = document.getElementById("dashboard");
  const errorMsg = document.getElementById("errorMsg");
  const logoutBtn = document.getElementById("logoutBtn");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "GMRPSTAFF" && password === "GMRPSTAFF") {
        loginContainer.style.display = "none";
        dashboard.style.display = "block";
        errorMsg.textContent = "";
      } else {
        errorMsg.textContent = "Incorrect username or password.";
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      dashboard.style.display = "none";
      loginContainer.style.display = "block";
      form.reset();
    });
  }
});
