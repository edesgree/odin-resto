import './sass/style.scss';
import { renderNav } from "./js/navbar";
import { renderFooter } from "./js/footer";
import { renderPageHome } from "./js/home";
import { renderPageMenu } from "./js/menu";
import { renderPageContact } from "./js/contact";

console.log("hello543");
const $content = document.getElementById('content1');
const tabs = document.querySelectorAll('tab');
$content.innerHTML = 'helo24';



function createHtmlElements(type, id, dataset, classes, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (content) element.innerText = content;

    
    console.log('classes', classes);
    
    if (classes){
        let arrayClasses = classes.split(' ');
        arrayClasses.forEach((myClass) => element.classList.add(myClass));

    }
    
    return element
}

function pageHome() {
    console.log('pageHome', pageHome)
    $content.innerHTML = "";
    renderNav();
    renderPageHome();
    renderFooter();
}
function pageMenu() {
    console.log('pageHome', pageHome)
    $content.innerHTML = "";
    renderNav();
    renderPageMenu();
    renderFooter();
}
function pageContact() {
    console.log('pageHome', pageHome)
    $content.innerHTML = "";
    renderNav();
    renderPageContact();
    renderFooter();
}
pageHome();

//tabs

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        console.log('e',e);
        const target = e.target.dataset.link;
        if (target === 'home') pageHome();
        if (target === 'menu') pageMenu();
        if (target === 'home') pageContact();
    })
});

export { createHtmlElements, $content }