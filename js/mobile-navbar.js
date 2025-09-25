const navList = document.querySelector(".nav-list");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelectorAll(".nav-links");

function showMobileMenu() {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    animateLinks();
}

function animateLinks() {
    navLinks.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease ${
                  index / 7 + 0.3
              }s forwards`);
    });
}

mobileMenu.addEventListener("click", showMobileMenu);

// Caso o menu mobile esteja ativo, o scroll da pagina sera bloqueado
const observer = new MutationObserver(() => {
    if (navList.classList.contains("active")) {
        document.documentElement.classList.add("noscroll"); // <html>
        document.body.classList.add("noscroll"); // <body>
    } else {
        document.documentElement.classList.remove("noscroll");
        document.body.classList.remove("noscroll");
    }
});
observer.observe(navList, { attributes: true, attributeFilter: ["class"] });

// Caso um dos botoes do menu seja clicado, o menu ira se fechar
function closeMenu() {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    animateLinks();
}
const menuItems = navList.querySelectorAll("li");

window.addEventListener("resize", () => {
    menuItems.forEach((e) => {
        if (window.innerWidth <= 620) {
            e.addEventListener("click", closeMenu);
        } else {
            e.removeEventListener("click", closeMenu);
        }
    });
});
