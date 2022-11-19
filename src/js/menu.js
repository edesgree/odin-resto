import { createHtmlElements, importAll } from "../index"
import foods from "./data/food"

// create HTML for this section
function createMenu() {
    const pageId = 'menu'
    const $menu = createHtmlElements('div', pageId, null, null, null);
    const $pageTitle = createHtmlElements('h1', null, null, null, 'Our delicious drinks');
    $menu.appendChild($pageTitle);

    const $foodGrid = createHtmlElements('div', null, null, 'articles', null);
    $menu.appendChild($foodGrid);

    // create a food item card
    function createFood({ name, desc, price, src }) {
        const food = document.createElement('article');
        food.classList.add('food');
        const img = new Image();
        img.src = src;
        img.alt = name;

        const description = document.createElement('div');
        description.classList.add('description');
        const foodName = document.createElement('h3');
        foodName.textContent = name;
        const foodText = document.createElement('p');
        foodText.textContent = desc;

        const foodPrice = document.createElement('h4');
        foodPrice.classList.add('price')
        foodPrice.textContent = price;

        description.appendChild(foodText)

        food.appendChild(foodName);
        food.appendChild(foodPrice);
        food.appendChild(img)
        food.appendChild(description)
        return food
    }

    foods.forEach((food) => {
        const foodHTML = createFood(food);
        $foodGrid.appendChild(foodHTML);
    })
    return $menu;

}
function render() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}
export { render as renderPageMenu }