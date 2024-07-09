document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("dropdown");
  const button = document.getElementById("dropdown-button");
  const menu = document.getElementById("dropdown-menu");

  menu.style.display = "none";
  dropdown.classList.remove("active");

  button.addEventListener("click", function (e) {
    e.stopPropagation();

    // Alternar a visibilidade do menu dropdown
    if (menu.style.display === "block") {
      menu.style.display = "none";
      dropdown.classList.remove("active");
    } else {
      menu.style.display = "block";
      dropdown.classList.add("active");
    }
  });

  window.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      menu.style.display = "none";
      dropdown.classList.remove("active");
    }
  });
});

function adjustTitle() {
  const title = document.getElementById("title");
  if (window.innerWidth < 800) {
    title.innerHTML = "EXTRA<br>CURRICULAR";
  } else {
    title.innerHTML = "EXTRACURRICULAR";
  }
}

// Ajustar o título quando a página carregar
window.onload = adjustTitle;

// Ajustar o título quando a janela for redimensionada
window.onresize = adjustTitle;
