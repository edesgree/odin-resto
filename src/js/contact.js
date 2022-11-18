import {createHtmlElements} from "../index"
//createHtmlElements(type,id,dataset,classes,content)
function createContact(){
    console.log('contact');
    const pageId = 'contact'
    const $contact = createHtmlElements('div',pageId,null,null,'la page contact');

    return $contact;
    
    
}
function render(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}
export {render as renderPageContact}