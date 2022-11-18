import {createHtmlElements, $content} from "../index"
//createHtmlElements(type,id,dataset,classes,content)
function render(){
    console.log('menu');
    const pageId = 'menu'
    const $main = createHtmlElements('main',pageId,null,null,'la page menu');

    
    
    $content.appendChild($main);
    
    
}

export {render as renderPageMenu}