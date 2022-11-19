import {createHtmlElements} from "../index"

function render(){
    const $footer = createHtmlElements('footer','footer',null,null,'© the coconut company');

    return $footer
}

export {render as renderFooter}