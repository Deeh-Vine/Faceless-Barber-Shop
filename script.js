const hamburger = document.getElementById("menu-trigger");
const menu = document.getElementById("nav-drop-down");

menuOpen(hamburger, menu);
function menuOpen() {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  });
}
