const navBurger = document.getElementById("nav-burger");
const navMenu = document.getElementById("nav-menu");

navBurger.addEventListener("click", () => {
    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
});
