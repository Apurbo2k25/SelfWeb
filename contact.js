// contact.js

const toggleBtn = document.querySelector('.toggle-theme');
const body = document.body;

// === Check saved theme on load ===
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

// === Toggle theme and save to localStorage ===
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
