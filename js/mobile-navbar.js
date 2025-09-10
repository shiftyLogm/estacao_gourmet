const navList = document.querySelector(".nav-list");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelectorAll(".nav-links");

function showMobileMenu() {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active")
    animateLinks();
}

function animateLinks() {
    navLinks.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease ${index / 7 + 0.3}s forwards`);
    });
}

mobileMenu.addEventListener("click", showMobileMenu);
