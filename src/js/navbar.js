import {createHtmlElements, $content} from "../index"
//createHtmlElements(type,id,dataset,classes,content)
function render(){
    console.log('rendernav');
    const navItems = ['home','menu','contact',]
    const tabs = createHtmlElements('nav',null,null,'tabs',null);

    navItems.forEach((item)=>{
        let navItem = createHtmlElements('span',null,'data-link','tab',item);
        navItem.setAttribute('data-link',item);
        tabs.appendChild(navItem);
        
            
            
        
    })
    
    $content.appendChild(tabs);
    
    
}

export {render as renderNav}