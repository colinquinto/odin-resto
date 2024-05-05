import './reset.css';
import './common.css';
import { renderLanding } from './landing-page.js';
import { renderMenu } from './menu.js';
import { renderContact } from './contact.js';

const render =(() => {
    const getContainer = document.querySelector("#content");
    const getBtn = document.querySelectorAll("button");
    renderLanding();

    const getAbout = document.querySelector(".about");
    getAbout.addEventListener("click", () => {
        getBtn.forEach((button) => button.classList.remove("active"));
        getContainer.innerHTML = "";
        renderLanding();
    });

    const getMenu = document.querySelector(".menu");
    getMenu.addEventListener("click", (e) => {
        getBtn.forEach((button) => button.classList.remove("active"));
        getMenu.classList.add("active");
        getContainer.innerHTML = "";
        renderMenu();
    })

    const getContact = document.querySelector(".contact");
    getContact.addEventListener("click", () => {
        getBtn.forEach((button) => button.classList.remove("active"));
        getContact.classList.add("active");
        getContainer.innerHTML = "";
        renderContact();
    })
})();

