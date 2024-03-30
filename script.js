function handleClick() {
  const heartIcon = document.getElementById("heart-icon");
  const isClicked =
    heartIcon.getAttribute("src") === "assets/heart-clicked.svg";

  if (isClicked) {
    heartIcon.setAttribute("src", "assets/heart-icon.svg");
  } else {
    heartIcon.setAttribute("src", "assets/heart-clicked.svg");
  }
}

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
