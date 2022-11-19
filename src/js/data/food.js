import {importAll } from "../../index"
// import images
const images = importAll(require.context('../../images/drinks', false, /\.(png|jpe?g|svg)$/));


const foods = [
    {
        name: 'Coco Fever',
        desc: `When it's too hot to handle, this is the drink for you!`,
        price: '10$',
        src: images[Object.keys(images)[0]]
    },
    {
        name: 'Coco Madness',
        desc: `Crazy coconut drink with banana and tabasco!`,
        price: '20$',
        src: images[Object.keys(images)[1]]
    },
    {
        name: 'Coco Passion',
        desc: `For the passion love, this is a sweet and fruity drink`,
        price: '15$',
        src: images[Object.keys(images)[2]]
    },
    {
        name: 'Coco Rico',
        desc: `When you need some cofee, but also wants some banana juice with it`,
        price: '16$',
        src: images[Object.keys(images)[3]]
    },
    {
        name: 'Coco Extravagenza',
        desc: `Coconut juice mixed with vodka and coconut sauce!`,
        price: '17$',
        src: images[Object.keys(images)[4]]
    },
    {
        name: 'Coco nuts',
        desc: `We give you coco, we give you nuts !`,
        price: '16$',
        src: images[Object.keys(images)[5]]
    },
    {
        name: 'Coco strawberry frenzy',
        desc: `For the strawberry lovers, the coco juice you will love`,
        price: '13$',
        src: images[Object.keys(images)[6]]
    },
    {
        name: 'Coco tuesday',
        desc: `A bit of coconut, a bit of cinammon, a bit of rhum, a bit of pineapple juice too!`,
        price: '17$',
        src: images[Object.keys(images)[7]]
    },
    {
        name: 'Coco la vista',
        desc: `The best coconut drink ever, just coconut with tequila!`,
        price: '$',
        src: images[Object.keys(images)[8]]
    }
]

export default foods;