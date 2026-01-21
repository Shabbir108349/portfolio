// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

window.addEventListener("load", () => {
    if (window.innerWidth <= 768) {
        menuBtn.style.display = 'block'
    }
});
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");

    // Change icon
    menuBtn.textContent =
        navLinks.classList.contains("nav-active") ? "✖" : "☰";
});

// Close sidebar when clicking link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("nav-active");
        menuBtn.textContent = "☰";
    });
});
