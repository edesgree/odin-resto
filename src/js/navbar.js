import { createHtmlElements } from "../index"
//createHtmlElements(type,id,dataset,classes,content)
function render() {
    console.log('rendernav');
    const navItems = ['home', 'menu', 'contact',]
    const $tabs = createHtmlElements('nav', null, null, 'tabs', null);

    navItems.forEach((item) => {
        let navItem = createHtmlElements('span', null, 'data-link', 'tab', item);
        navItem.setAttribute('data-link', item);
        //navItem.setAttribute('onclick', openTabs());

        $tabs.appendChild(navItem);


        // item.addEventListener('click', (e) => {
        //     console.log('click')
        //     console.log('e',e);
        //     const target = e.target.dataset.link;
        //     if (target === 'home') pageHome();
        //     if (target === 'menu') pageMenu();
        //     if (target === 'home') pageContact();
        // })

    })
    return $tabs;


}

export { render as renderNav }