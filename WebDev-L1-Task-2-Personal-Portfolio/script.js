/* =========================================================
   PERSONAL PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close mobile menu after clicking a link */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");


const updateActiveLink = () => {

    let currentSection = "";

    const scrollPosition =
        window.scrollY + 160;


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            currentSection =
                section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

};


window.addEventListener(
    "scroll",
    updateActiveLink
);


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById("year");


yearElement.textContent =
    new Date().getFullYear();


/* ================= CLOSE MENU ON RESIZE ================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

        navMenu.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


/* ================= INITIAL STATE ================= */

updateActiveLink();