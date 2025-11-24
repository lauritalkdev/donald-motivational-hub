// scripts/script.js

// Mobile Navigation Toggle Functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    // Toggle the 'active' class on both the hamburger and the menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close the mobile menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));