import { createHtmlElements, importAll} from "../index"

//createHtmlElements(type,id,dataset,classes,content)
const images = importAll(require.context('../images/drinks', false, /\.(png|jpe?g|svg)$/));
  
console.log("images keys",images[Object.keys(images)[0]])
console.log("images values",images[Object.values(images)[0]])
const drinks={
    name:"drink01",
    name:"drink02",
    name:"drink03"
}
var requireContext = require.context("../images/drinks", true, /^\.\/.*\.jpg$/);
requireContext.keys().map(requireContext);
console.log('requireContext', requireContext)

function createMenu() {
    console.log('menu');
    const pageId = 'menu'
    const $menu = createHtmlElements('div', pageId, null, null, 'la page menu');
    function createFood(src, text, price, alt) {
        const food = document.createElement('article');
        food.classList.add('food');
        const img = document.createElement('img');
        img.setAttribute('src', src);
        img.setAttribute('alt', alt);

        const description = document.createElement('div');
        description.classList.add('description');
        const foodName = document.createElement('h3');
        foodName.textContent = text;
        console.log('foodName', foodName)
        const foodPrice = document.createElement('h4');
        foodPrice.textContent = price;

        description.appendChild(foodName)
        description.appendChild(foodPrice)
        console.log('description', description)

        food.appendChild(img)
        food.appendChild(description)
        return food
    }
    const foods = [
        createFood(
            images[Object.keys(images)[0]],
            'acbar ice Cream',
            '10CR',
            'acbar ice cream'
        ),
        createFood(
            images[Object.keys(images)[1]],
            'acbar ice Cream',
            '10CR',
            'acbar ice cream'
        ),
    ]
    foods.forEach((food) => {
        $menu.appendChild(food);
    })
    return $menu;

}
function render(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}
export { render as renderPageMenu }