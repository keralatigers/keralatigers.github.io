// assets/app.js

// Mobile nav toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    hamburger.classList.toggle("is-active");
  });
}

// Close menu when a link is clicked (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open");
      hamburger.classList.remove("is-active");
    }
  });
});
