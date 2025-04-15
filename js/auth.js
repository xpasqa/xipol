// js/auth.js
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    if (email === "admin@ilpol.com" && password === "admin123") {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "/dashboard.html";
    } else {
      alert("Email atau password salah.");
    }
  });
  