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
