import {createHtmlElements, $content} from "../index"
//createHtmlElements(type,id,dataset,classes,content)
function render(){
    console.log('home');
    const pageId = 'home'
    const $main = createHtmlElements('main',pageId,null,null,'la page home');

    
    
    $content.appendChild($main);
    
    
}

export {render as renderPageHome}