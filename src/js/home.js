import { createHtmlElements } from "../index"
import imgHeroHome from '../images/hero-coco.webp';

function createHome() {
    const pageId = 'home';
    const $home = createHtmlElements('div', pageId, null, null, null);

    // HERO AREA
    const $hero = document.createElement('div');
    $hero.classList.add('hero');
    const heroText = "Are you looking for the most delicious coconut cocktail in the world ? Say no more, you are in for a treat!";
    const $heroContentLeft = document.createElement('div');
    $heroContentLeft.classList.add('hero-text');
    const $heroTitle = createHtmlElements('h2', null, null, null, 'Oh! My! God! So good!');
    const $heroText = createHtmlElements('span', null, null, null, heroText);
    $heroContentLeft.appendChild($heroText);
    const heroImg = new Image();
    heroImg.src = imgHeroHome;
    heroImg.alt = "Resto Coco is the best in town !";
    $hero.setAttribute('style', `background-image:url('${heroImg.src}')`);
    $heroContentLeft.prepend($heroTitle);
    $hero.appendChild($heroContentLeft);

    const $heroContentRight = createHtmlElements('div', null, null, 'hero-content-right', null);
    const $homeContentBtn = createHtmlElements('a', null, "menu", 'btn', 'See our menu');
    $heroContentRight.appendChild($homeContentBtn);

    $hero.appendChild($heroContentRight);
    $home.appendChild($hero);


    return $home;
}
function render() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}
export { render as renderPageHome }