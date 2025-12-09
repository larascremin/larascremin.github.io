import { coffeeIcon } from "./assets/images/icons.js";
import { menuIcon } from "./assets/images/icons.js";
import { arrowIcon } from "./assets/images/icons.js";
import { arrowThinIcon } from "./assets/images/icons.js";
import { arrowRegIcon } from "./assets/images/icons.js";
import { arrowBldIcon } from "./assets/images/icons.js";
import { whatsappIcon } from "./assets/images/icons.js";
import { emailIcon } from "./assets/images/icons.js";
import { githubIcon } from "./assets/images/icons.js";
import { linkedinIcon } from "./assets/images/icons.js";
import { coffeeThinIcon } from "./assets/images/icons.js";
import { coffeeRegIcon } from "./assets/images/icons.js";
import { coffeeBoldIcon } from "./assets/images/icons.js";
import { emailThinIcon } from "./assets/images/icons.js";
import { emailRegIcon } from "./assets/images/icons.js";
import { emailBoldIcon } from "./assets/images/icons.js";

document.getElementById("header-icon").innerHTML = coffeeIcon;
document.getElementById("email").innerHTML = emailIcon;
document.getElementById("linkedin").innerHTML = linkedinIcon;
document.getElementById("github").innerHTML = githubIcon;
document.getElementById("whatsapp").innerHTML = whatsappIcon;
document.getElementById("arrowThin").innerHTML = arrowThinIcon;
document.getElementById("arrowReg").innerHTML = arrowRegIcon;
document.getElementById("arrowBold").innerHTML = arrowBldIcon;
document.getElementById("coffeeThin").innerHTML = coffeeThinIcon;
document.getElementById("coffeeReg").innerHTML = coffeeRegIcon;
document.getElementById("coffeeBold").innerHTML = coffeeBoldIcon;
document.getElementById("emailThin").innerHTML = emailThinIcon;
document.getElementById("emailReg").innerHTML = emailRegIcon;
document.getElementById("emailBold").innerHTML = emailBoldIcon;

const buttons = document.querySelectorAll(".experience-link");
buttons.forEach((btn) => {
  btn.innerHTML = arrowIcon;
});

const btnMobile = document.getElementById("btn-mobile");

btnMobile.addEventListener("click", toggleMenu);

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
