import {createHtmlElements} from "../index"
//createHtmlElements(type,id,dataset,classes,content)
function createHome(){
    console.log('home');
    const pageId = 'home'
    const $home = createHtmlElements('div',pageId,null,null,'la page home');
   
    
    $home.textContent="page home";
    return $home;
    
    
}
function render(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}
export {render as renderPageHome}