const btnMobile = document.getElementById('mobile');

function toggleMenu () {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu);