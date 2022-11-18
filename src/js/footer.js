import {createHtmlElements} from "../index"
//createHtmlElements(type,id,dataset,classes,content)
function render(){
    console.log('footer');
    const $footer = createHtmlElements('footer','footer',null,null,'le footer');

    return $footer
    
    
}

export {render as renderFooter}