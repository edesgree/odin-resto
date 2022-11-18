import './sass/style.scss';
import { renderHeader } from "./js/header";
import { renderFooter } from "./js/footer";
import { renderPageHome } from "./js/home";
import { renderPageMenu } from "./js/menu";
import { renderPageContact } from "./js/contact";



function createMain() {
    const $main = document.createElement('main');
    $main.setAttribute("id", "main");
    return $main;
}
function setActiveButton(button) {
    const buttons = document.querySelectorAll(".tab");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }
function initWebsite() {
    const $content = document.getElementById('content1');

    $content.appendChild(renderHeader());
    $content.appendChild(createMain());
    $content.appendChild(renderFooter());

    // set active btn
    setActiveButton(document.querySelector(".tab"));
    renderPageHome();
}
function createHtmlElements(type, id, dataset, classes, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (content) element.innerText = content;
    if (classes) {
        let arrayClasses = classes.split(' ');
        arrayClasses.forEach((myClass) => element.classList.add(myClass));
    }

    return element
}


initWebsite();

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const tabBtn = e.target;
        const target = tabBtn.dataset.link;
        // if already on page we do nothing
        if (tabBtn.classList.contains("active")) return;
        setActiveButton(tabBtn);
        switch (target) {
            case "home":
                
                renderPageHome();
                break;
            case "menu":
                
                renderPageMenu();
                break;
            case "contact":
                
                renderPageContact();
                break;
            default:
                renderPageHome();
        }
    })
});


export { createHtmlElements }