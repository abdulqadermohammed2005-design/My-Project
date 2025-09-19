const formTitle = document.getElementById("form-title");
const toggleText = document.getElementById("toggle-text");
const submitBtn = document.getElementById("submitBtn");
const authForm = document.getElementById("authForm");
const message = document.getElementById("message");

let isLogin = true;

// تبديل بين Login و Sign Up
toggleText.addEventListener("click", (e) => {
  if (e.target.id === "toggle-link") {
    isLogin = !isLogin;
    if (isLogin) {
      formTitle.textContent = "Login";
      submitBtn.textContent = "Login";
      toggleText.innerHTML = `Don't have an account? 
        <span id="toggle-link">Sign Up</span>`;
    } else {
      formTitle.textContent = "Sign Up";
      submitBtn.textContent = "Sign Up";
      toggleText.innerHTML = `Already have an account? 
        <span id="toggle-link">Login</span>`;
    }
  }
});

// التحقق من التسجيل أو الدخول
authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (isLogin) {
    // تسجيل دخول
    const storedUser = localStorage.getItem(username);
    if (storedUser && storedUser === password) {
      message.textContent = "✅ Login successful!";
      message.style.color = "limegreen";
      setTimeout(() => {
        window.location.href = "Home.html"; // تحويل للصفحة الرئيسية
      }, 1000);
    } else {
      message.textContent = "❌ Invalid username or password";
      message.style.color = "red";
    }
  } else {
    // تسجيل حساب جديد
    if (localStorage.getItem(username)) {
      message.textContent = "⚠️ Username already exists!";
      message.style.color = "orange";
    } else {
      localStorage.setItem(username, password);
      message.textContent = "✅ Account created successfully!";
      message.style.color = "limegreen";
    }
  }
});
