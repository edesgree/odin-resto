import {createHtmlElements, $content} from "../index"
//createHtmlElements(type,id,dataset,classes,content)
function render(){
    console.log('contact');
    const pageId = 'contact'
    const $main = createHtmlElements('main',pageId,null,null,'la page contact');

    
    
    $content.appendChild($main);
    
    
}

export {render as renderPageContact}