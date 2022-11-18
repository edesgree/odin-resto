import {createHtmlElements, $content} from "../index"
//createHtmlElements(type,id,dataset,classes,content)
function render(){
    console.log('footer');
    const $main = createHtmlElements('footer','footer',null,null,'le footer');

    
    
    $content.appendChild($main);
    
    
}

export {render as renderFooter}