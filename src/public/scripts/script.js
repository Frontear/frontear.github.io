const burger = document.getElementById("navbarBurger");
const menu = document.getElementById("navbarMenu");

burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
});
