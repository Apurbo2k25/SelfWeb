document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".toggle-theme");
  
    // Load saved theme or default to light
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  
    // Toggle theme on button click
    toggleBtn.addEventListener("click", () => {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      }
    });
  });
  