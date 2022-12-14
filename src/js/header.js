import { createHtmlElements } from "../index"

function renderNav() {
    const navItems = ['home', 'menu', 'contact',]
    const $tabs = createHtmlElements('nav', null, null, 'tabs', null);

    navItems.forEach((item) => {
        let navItem = createHtmlElements('span', null, 'data-link', 'tab', item);
        navItem.setAttribute('data-link', item);
        $tabs.appendChild(navItem);
    })

    return $tabs;
}
function render() {
    const myNav = renderNav();
    const header = document.createElement('header');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = "Resto Coco";
    header.appendChild(logo);
    header.appendChild(myNav);
    return header;
}
export { render as renderHeader }