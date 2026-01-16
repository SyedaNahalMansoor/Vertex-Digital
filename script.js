document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.getElementById("menuBar");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBar.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
});
