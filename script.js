document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-theme");

  // Apply saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.add("light-mode"); // default is light
  }

  // Theme toggle button click
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


// Prevent browser from restoring scroll position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Scroll to top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

