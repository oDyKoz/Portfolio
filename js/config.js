document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
  window.scrollTo(0, 0);
});

// Menu toggle
const menuToggle = document.getElementById("menu"); 
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  if (nav.classList.contains("flex")) {
    nav.classList.remove("flex");
    nav.classList.add("hidden");
  } else {
    nav.classList.add("flex");
    nav.classList.remove("hidden");
  }
});