const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hamburgerNavMenu = document.querySelector(".hamburger__nav-menu");

// var element = document.getElementById("ulBurger");
// element.classList.add("displayOff");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerNavMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburgerNavMenu.classList.remove("active");
  })
);
