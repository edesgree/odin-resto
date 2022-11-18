import { createHtmlElements, importAll } from "../index"

//createHtmlElements(type,id,dataset,classes,content)
const images = importAll(require.context('../images/drinks', false, /\.(png|jpe?g|svg)$/));
console.log("images keys", images[Object.keys(images)[0]])
console.log("images values", images[Object.values(images)[0]])






function createMenu() {
    console.log('menu');
    const pageId = 'menu'
    const $menu = createHtmlElements('div', pageId, null, null, 'la page menu');
    const $foodGrid = createHtmlElements('div', null, null, 'articles', null);
    $menu.appendChild($foodGrid);
    const foods = [
        {
            name: 'Coco fever',
            desc: 'Le best drink with coconut',
            price: '10$',
            src: images[Object.keys(images)[0]]
        },
        {
            name: 'Coco Madness',
            desc: 'Crazy coconut drink with banana and tabasco!',
            price: '20$',
            src: images[Object.keys(images)[1]]
        },
    ]
 
    function createFood({ name, desc, price, src }) {
        const food = document.createElement('article');
        food.classList.add('food');
        const img = document.createElement('img');
        img.setAttribute('src', src);
        img.setAttribute('alt', name);

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

        console.log('description', description)
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