// Staff dashboard login
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
      const error = document.getElementById("errorMsg");
      if (user === "GMRPSTAFF" && pass === "GMRPSTAFF") {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
      } else {
        error.textContent = "Incorrect username or password.";
      }
    });
  }
});

function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("loginContainer").style.display = "block";
}
