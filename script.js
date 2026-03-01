


// ================= NAV SCROLL EFFECT =================
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(6, 26, 20, 1)";
    } else {
        navbar.style.background = "rgba(6, 26, 20, 0.9)";
    }
});

