// navbar fading logic
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".custom-navbar");
    const hero = document.querySelector("#hero");
    if (!navbar || !hero) return;

    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                navbar.classList.remove("navbar-scrolled");
            } else {
                navbar.classList.add("navbar-scrolled");
            }
        },
        {
            root: null,
            threshold: 0.4
        }
    );

    observer.observe(hero);
});
