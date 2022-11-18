import { createHtmlElements } from "../index"
import imgHeroHome from '../images/hero-coco.webp';
//createHtmlElements(type,id,dataset,classes,content)
function createHome() {
    console.log('home');
    const pageId = 'home';
    const heroText = "Oh! My! God! So good! The decor was unique and incredible. After my meal, I was knocked into a food coma. I would eat here every day if I could afford it!"
    const $home = createHtmlElements('div', pageId, null, null, null);

    const $hero = document.createElement('div');
    $hero.classList.add('hero');
    const $heroText = document.createElement('div');
    $heroText.classList.add('hero-text');
    $heroText.innerText = heroText;
    const heroImg = new Image();
    heroImg.src = imgHeroHome;
    heroImg.alt = "Resto Coco is the best in town !";
    $hero.appendChild(heroImg);
    $hero.appendChild($heroText);
    
    $home.appendChild($hero);

    return $home;


}
function render() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}
export { render as renderPageHome }