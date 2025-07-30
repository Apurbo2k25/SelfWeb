// === PDF Download ===
function downloadPDF() {
  const element = document.getElementById("resume");

  if (!element) {
    alert("Resume content not found!");
    return;
  }

  const opt = {
    margin: 0.5,
    filename: 'Apurbo_Chakrabarty_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
}

// === Theme Toggle with LocalStorage ===
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-theme");

  // Apply saved theme if exists
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Save theme to localStorage
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }
});
