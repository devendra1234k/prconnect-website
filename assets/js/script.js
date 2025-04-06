// This file contains the JavaScript code for the Prconnect website. 
// It handles interactivity, such as menu toggling and form submissions.

document.addEventListener("DOMContentLoaded", function() {
    const navOpenBtn = document.querySelector(".nav-open-btn");
    const navCloseBtn = document.querySelector(".nav-close-btn");
    const navbar = document.querySelector(".navbar");
    const overlay = document.querySelector(".overlay");

    // Function to open the navigation menu
    navOpenBtn.addEventListener("click", function() {
        navbar.classList.add("active");
        overlay.classList.add("active");
    });

    // Function to close the navigation menu
    navCloseBtn.addEventListener("click", function() {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Close the menu when clicking on the overlay
    overlay.addEventListener("click", function() {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("[data-nav-link]");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
            navbar.classList.remove("active");
            overlay.classList.remove("active");
        });
    });
});