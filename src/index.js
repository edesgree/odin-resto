import './sass/style.scss';
import { renderNav } from "./js/navbar";
import { renderFooter } from "./js/footer";
import { renderPageHome } from "./js/home";
import { renderPageMenu } from "./js/menu";
import { renderPageContact } from "./js/contact";



function createMain() {
    const $main = document.createElement('main');
    $main.setAttribute("id", "main");
    return $main;
}

function initWebsite() {
    const $content = document.getElementById('content1');

    $content.appendChild(renderNav());
    $content.appendChild(createMain());
    $content.appendChild(renderFooter());

    // set active btn
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


// function pageHome() {
//     const main = document.getElementById("main");
//     main.textContent = "";
//     main.appendChild(renderPageHome());
// }
// function pageMenu() {
//     console.log('pageMenu', pageMenu)
   
    
//     renderPageMenu();
   
// }
// function pageContact() {
//     console.log('pageContact', pageContact)
    
    
//     renderPageContact();
    
// }
initWebsite();

//tabs
// tabs.forEach(tab => {
//     tab.addEventListener('click', openTabs)
// });
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        console.log('tab', tab)
        console.log('click')
        console.log('e', e);
        const tabBtn = e.target;
        const target = tabBtn.dataset.link;
        console.log('target', target)

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
const buttons = document.querySelectorAll('.toto');
console.log('buttons', buttons)
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log('button', button)
        console.log("button toto!")
    });
});

export { createHtmlElements }