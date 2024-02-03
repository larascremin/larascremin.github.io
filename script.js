// carousel

let currentIndex = 0;
const totalItems = document.querySelectorAll(".carousel-item").length;

function showSlide(index) {
  const list = document.querySelector(".carousel-list");
  const itemWidth = document.querySelector(".carousel-item").offsetWidth;
  list.style.transform = `translateX(-${index * itemWidth}px)`;
  currentIndex = index;
}

function prevSlide() {
  if (currentIndex > 0) {
    showSlide(currentIndex - 1);
  } else {
    showSlide(totalItems - 1);
  }
}

function nextSlide() {
  if (currentIndex < totalItems - 1) {
    showSlide(currentIndex + 1);
  } else {
    showSlide(0);
  }
}

document.querySelector(".carousel-prev").addEventListener("click", prevSlide);
document.querySelector(".carousel-next").addEventListener("click", nextSlide);
