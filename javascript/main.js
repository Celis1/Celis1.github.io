document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".custom-navbar");
    const navLinks = document.querySelectorAll(".custom-navbar .nav-link");

    const sections = Array.from(document.querySelectorAll("section[id]"));
    const homeLink = document.querySelector('.custom-navbar .nav-link[href="index.html"]');

    const sectionLinkMap = {};
    sections.forEach((section) => {
        const id = section.id;
        const link = document.querySelector(`.custom-navbar .nav-link[href="#${id}"]`);
        if (link) {
            sectionLinkMap[id] = link;
        }
    });

    function updateOnScroll() {
        let currentId = "hero";
        const threshold = window.innerHeight * 0.3;

        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= threshold && rect.bottom >= threshold) {
                currentId = section.id;
                break;
            }
        }

        navLinks.forEach((link) => link.classList.remove("active"));

        if (currentId === "hero") {
            if (homeLink) {
                homeLink.classList.add("active");
            }
        } else {
            const activeLink = sectionLinkMap[currentId];
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }

        if (navbar) {
            if (currentId === "hero") {
                navbar.classList.remove("navbar-scrolled");
            } else {
                navbar.classList.add("navbar-scrolled");
            }
        }
    }

    updateOnScroll();
    window.addEventListener("scroll", updateOnScroll);
    window.addEventListener("resize", updateOnScroll);
});
