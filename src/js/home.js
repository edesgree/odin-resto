import { createHtmlElements } from "../index"
import imgHeroHome from '../images/hero-coco.webp';

function createHome() {
    const pageId = 'home';
    const $home = createHtmlElements('div', pageId, null, null, null);

    // HERO AREA
    const $hero = document.createElement('div');
    $hero.classList.add('hero');
    const heroText = "The decor was unique and incredible. After my meal, I was knocked into a food coma. I would eat here every day if I could afford it!";
    const $heroText = document.createElement('div');
    $heroText.classList.add('hero-text');
    const $heroTitle = createHtmlElements('h2', null, null, null, 'Oh! My! God! So good! ');

    $heroText.innerText = heroText;
    const heroImg = new Image();
    heroImg.src = imgHeroHome;
    heroImg.alt = "Resto Coco is the best in town !";
    $hero.appendChild(heroImg);
    $heroText.prepend($heroTitle);
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