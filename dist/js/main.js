/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/drinks sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*********************************************************************!*\
  !*** ./src/images/drinks/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./drink-01.jpg": "./src/images/drinks/drink-01.jpg",
	"./drink-02.jpg": "./src/images/drinks/drink-02.jpg",
	"./drink-03.jpg": "./src/images/drinks/drink-03.jpg",
	"./drink-04.jpg": "./src/images/drinks/drink-04.jpg",
	"./drink-05.jpg": "./src/images/drinks/drink-05.jpg",
	"./drink-06.jpg": "./src/images/drinks/drink-06.jpg",
	"./drink-07.jpg": "./src/images/drinks/drink-07.jpg",
	"./drink-08.jpg": "./src/images/drinks/drink-08.jpg",
	"./drink-09.jpg": "./src/images/drinks/drink-09.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/drinks sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/images/socials sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**********************************************************************!*\
  !*** ./src/images/socials/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./facebook-svgrepo-com.svg": "./src/images/socials/facebook-svgrepo-com.svg",
	"./instagram-svgrepo-com.svg": "./src/images/socials/instagram-svgrepo-com.svg",
	"./twitter-svgrepo-com.svg": "./src/images/socials/twitter-svgrepo-com.svg",
	"./youtube-svgrepo-com.svg": "./src/images/socials/youtube-svgrepo-com.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/socials sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHtmlElements": () => (/* binding */ createHtmlElements),
/* harmony export */   "importAll": () => (/* binding */ importAll),
/* harmony export */   "setActiveButton": () => (/* binding */ setActiveButton)
/* harmony export */ });
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/header */ "./src/js/header.js");
/* harmony import */ var _js_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/footer */ "./src/js/footer.js");
/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/home */ "./src/js/home.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");
/* harmony import */ var _js_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/contact */ "./src/js/contact.js");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg");








function createMain() {
    const $main = document.createElement('main');
    $main.setAttribute("id", "main");
    return $main;
}
function setActiveButton(button) {
    const buttons = document.querySelectorAll(".tab");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}
function initWebsite() {
    const $content = document.getElementById('content');
    $content.innerHTML = "";
    $content.appendChild((0,_js_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)());
    $content.appendChild(createMain());
    $content.appendChild((0,_js_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)());

    // set active btn
    setActiveButton(document.querySelector(".tab"));
    (0,_js_home__WEBPACK_IMPORTED_MODULE_3__.renderPageHome)();
}
// helper to create html elements
function createHtmlElements(type, id, dataset, classes, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (content) element.innerText = content;
    if (classes) {
        let arrayClasses = classes.split(' ');
        arrayClasses.forEach((myClass) => element.classList.add(myClass));
    }
    if (dataset) element.setAttribute('data-action',dataset);
    return element
}

initWebsite();

// import images from a folder
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

// NAVIGATION
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const tabBtn = e.target;
        const target = tabBtn.dataset.link;
        // if already on page we do nothing
        if (tabBtn.classList.contains("active")) return;
        setActiveButton(tabBtn);
        switch (target) {
            case "home":
                (0,_js_home__WEBPACK_IMPORTED_MODULE_3__.renderPageHome)();
                break;
            case "menu":
                (0,_js_menu__WEBPACK_IMPORTED_MODULE_4__.renderPageMenu)();
                break;
            case "contact":
                (0,_js_contact__WEBPACK_IMPORTED_MODULE_5__.renderPageContact)();
                break;
            default:
                (0,_js_home__WEBPACK_IMPORTED_MODULE_3__.renderPageHome)();
        }
    })
});




/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPageContact": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");


// create HTML for this section
function createContact() {
    const pageId = 'contact'
    const $contact = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('div', pageId, null, null, null);
    const $pageTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('h1', null, null, null, 'Contact Us');
    $contact.appendChild($pageTitle);

    // GOOGLE MAP AREA
    const $gmap = document.createElement('div');
    $gmap.classList.add('gmap');
    const gmapWidth = 400;
    const gmapHeight = 200;
    $gmap.innerHTML = `
    <div class="map-responsive">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39120.04317806153!2d-151.74526867697455!3d-16.498018409289173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bdbd188a4a98ab%3A0x160a089e92d5ce61!2sBora%20Bora!5e0!3m2!1sen!2sfr!4v1669196419676!5m2!1sen!2sfr" width="${gmapWidth}" height="${gmapHeight}" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    `
    
    // INFO AREA
    const $contactInfo = document.createElement('div');
    $contactInfo.classList.add('column-1-3')

    //HOURS
    const $hours = document.createElement('div');
    $hours.classList.add('box-hours')
    const $hoursTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('h2', null, null, null, 'Hours of service');
    const hoursData = [
        'Sunday: 8am - 8pm',
        'Monday: 6am - 6pm',
        'Tuesday: 6am - 6pm',
        'Wednesday: 6am - 6pm',
        'Thursday: 6am - 10pm',
        'Friday: 6am - 10pm',
        'Saturday: 8am - 10pm',
    ]

    // create html list from array
    function createList(list) {
        const $list = document.createElement('ul')
        for (let i = 0; i < list.length; i++) {
            const li = document.createElement('li')
            li.innerText = list[i]
            $list.appendChild(li)
        }
        return $list
    }
    const $hoursList = createList(hoursData);

    $hours.appendChild($hoursTitle)
    $hours.appendChild($hoursList)

    //LOCATION AND PHONES
    const $info = document.createElement('div');
    $info.classList.add('info')
    const $locationTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('h2', null, null, null, 'Location');
    const $locationText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('p', null, null, null, '12 Coco street, Paris, France');
    const $phonesTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('h2', null, null, null, 'Phones');
    const $phonesText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('p', null, null, null, 'Tel:+123 2133 12332');
    $info.appendChild($locationTitle);
    $info.appendChild($locationText);
    $info.appendChild($phonesTitle);
    $info.appendChild($phonesText);
    
    // SOCIALS
    const $socials = document.createElement('div');
    $socials.classList.add('socials')
    const $socialsTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('h2', null, null, null, 'Follow Us');

    const iconsSocials = (0,_index__WEBPACK_IMPORTED_MODULE_0__.importAll)(__webpack_require__("./src/images/socials sync \\.(png%7Cjpe?g%7Csvg)$"));
    
    // array of info on socials
    const socials = [
        {
            name: 'Facebook',
            link: 'http://www.facebook.com',
            iconPath: iconsSocials[Object.keys(iconsSocials)[0]]
        },
        {
            name: 'Facebook',
            link: 'http://www.facebook.com',
            iconPath: iconsSocials[Object.keys(iconsSocials)[1]]
        },
        {
            name: 'Facebook',
            link: 'http://www.facebook.com',
            iconPath: iconsSocials[Object.keys(iconsSocials)[2]]
        },
        {
            name: 'Facebook',
            link: 'http://www.facebook.com',
            iconPath: iconsSocials[Object.keys(iconsSocials)[3]]
        }
    ];

    function createSocialNav(list) {
        const $list = document.createElement('ul');
        $list.classList.add('socials-list')
        for (let i = 0; i < list.length; i++) {
            const li = document.createElement('li')
            const link = createSocial(socials[i].name, socials[i].link, socials[i].iconPath)
            li.appendChild(link)
            $list.appendChild(li)
        }
        return $list
    }
    function createSocial(name, link, iconPath) {
        const socialLink = document.createElement('a');
        socialLink.setAttribute('href', link);
        const socialImg = document.createElement('img');
        socialImg.setAttribute('src', iconPath);
        
        socialImg.setAttribute('alt', name);
        socialLink.appendChild(socialImg);
        return socialLink
    }
    const $socialList = createSocialNav(socials)

    $socials.appendChild($socialsTitle)
    $socials.appendChild($socialList)

    $contactInfo.appendChild($hours)
    $contactInfo.appendChild($info)
    $contactInfo.appendChild($socials)

    $contact.appendChild($gmap)
    $contact.appendChild($contactInfo)

    return $contact;
}
function render() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}


/***/ }),

/***/ "./src/js/data/food.js":
/*!*****************************!*\
  !*** ./src/js/data/food.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");

// import images
const images = (0,_index__WEBPACK_IMPORTED_MODULE_0__.importAll)(__webpack_require__("./src/images/drinks sync \\.(png%7Cjpe?g%7Csvg)$"));

// array containing the data
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
        desc: `For the passion love, this is a sweet and fruity drink.`,
        price: '15$',
        src: images[Object.keys(images)[2]]
    },
    {
        name: 'Coco Rico',
        desc: `When you need some cofee, but also wants some banana juice with it.`,
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
        desc: `For the strawberry lovers, the coco juice you will love.`,
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
        price: '9$',
        src: images[Object.keys(images)[8]]
    }
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foods);

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFooter": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");


function render(){
    const $footer = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('footer','footer',null,null,'© the coconut company');

    return $footer
}



/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");


function renderNav() {
    const navItems = ['home', 'menu', 'contact',]
    const $tabs = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('nav', null, null, 'tabs', null);

    navItems.forEach((item) => {
        let navItem = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('span', null, 'data-link', 'tab', item);
        navItem.setAttribute('data-link', item);
        $tabs.appendChild(navItem);
    })

    return $tabs;
}
function render() {
    const myNav = renderNav();
    const header = document.createElement('header');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = "Resto Coco";
    header.appendChild(logo);
    header.appendChild(myNav);
    return header;
}


/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPageHome": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _images_hero_coco_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hero-coco.webp */ "./src/images/hero-coco.webp");



// create HTML for this section
function createHome() {
    const pageId = 'home';
    const $home = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('div', pageId, null, null, null);

    // HERO AREA
    const $hero = document.createElement('div');
    $hero.classList.add('hero');
    const heroText = "Are you looking for the most delicious coconut cocktail in the world ? Say no more, you are in for a treat!";
    const $heroContentLeft = document.createElement('div');
    $heroContentLeft.classList.add('hero-text');
    const $heroTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('h2', null, null, null, 'Oh! My! God! So good!');
    const $heroText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('span', null, null, null, heroText);
    $heroContentLeft.appendChild($heroText);
    const heroImg = new Image();
    heroImg.src = _images_hero_coco_webp__WEBPACK_IMPORTED_MODULE_2__;
    heroImg.alt = "Resto Coco is the best in town !";
    $hero.setAttribute('style', `background-image:url('${heroImg.src}')`);
    $heroContentLeft.prepend($heroTitle);
    $hero.appendChild($heroContentLeft);

    const $heroContentRight = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('div', null, null, 'hero-content-right', null);
    const $btnMenu = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('a', null, "menu", 'btn', 'See our menu');
    $heroContentRight.appendChild($btnMenu);

    $hero.appendChild($heroContentRight);
    $home.appendChild($hero);

    return $home;
}
function render() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());

    // other button to go to menu page
const $btnMenu = document.querySelector('[data-action=menu]');
$btnMenu.addEventListener('click', (e) => {
    console.log('click menu');
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setActiveButton)(document.querySelector("[data-link=menu]"))
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.renderPageMenu)();
})
}


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPageMenu": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _data_food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/food */ "./src/js/data/food.js");



// create HTML for this section
function createMenu() {
    const pageId = 'menu'
    const $menu = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('div', pageId, null, null, null);
    const $pageTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('h1', null, null, null, 'Our delicious drinks');
    $menu.appendChild($pageTitle);

    const $foodGrid = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElements)('div', null, null, 'articles', null);
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

    _data_food__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((food) => {
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


/***/ }),

/***/ "./src/images/drinks/drink-01.jpg":
/*!****************************************!*\
  !*** ./src/images/drinks/drink-01.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/c08e9d35d26530fc9641.jpg";

/***/ }),

/***/ "./src/images/drinks/drink-02.jpg":
/*!****************************************!*\
  !*** ./src/images/drinks/drink-02.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/3894a0995b9a51cef0a2.jpg";

/***/ }),

/***/ "./src/images/drinks/drink-03.jpg":
/*!****************************************!*\
  !*** ./src/images/drinks/drink-03.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/c102560bc47efce82ba4.jpg";

/***/ }),

/***/ "./src/images/drinks/drink-04.jpg":
/*!****************************************!*\
  !*** ./src/images/drinks/drink-04.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/6bfa1e32cf22e14d692b.jpg";

/***/ }),

/***/ "./src/images/drinks/drink-05.jpg":
/*!****************************************!*\
  !*** ./src/images/drinks/drink-05.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/1919128644b38ce4d110.jpg";

/***/ }),

/***/ "./src/images/drinks/drink-06.jpg":
/*!****************************************!*\
  !*** ./src/images/drinks/drink-06.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/0f5ec369603c7638d7b4.jpg";

/***/ }),

/***/ "./src/images/drinks/drink-07.jpg":
/*!****************************************!*\
  !*** ./src/images/drinks/drink-07.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/021888ffa7be7f1cb7b2.jpg";

/***/ }),

/***/ "./src/images/drinks/drink-08.jpg":
/*!****************************************!*\
  !*** ./src/images/drinks/drink-08.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/c88268621ad8a9521820.jpg";

/***/ }),

/***/ "./src/images/drinks/drink-09.jpg":
/*!****************************************!*\
  !*** ./src/images/drinks/drink-09.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/d9d08519bf1e473f8213.jpg";

/***/ }),

/***/ "./src/images/hero-coco.webp":
/*!***********************************!*\
  !*** ./src/images/hero-coco.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/ff911c543a7d97ea34b2.webp";

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/a8309654d58059dadbd4.svg";

/***/ }),

/***/ "./src/images/socials/facebook-svgrepo-com.svg":
/*!*****************************************************!*\
  !*** ./src/images/socials/facebook-svgrepo-com.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/5aa9dd97f0c1a5039ca6.svg";

/***/ }),

/***/ "./src/images/socials/instagram-svgrepo-com.svg":
/*!******************************************************!*\
  !*** ./src/images/socials/instagram-svgrepo-com.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/62572c862d53f228aa8e.svg";

/***/ }),

/***/ "./src/images/socials/twitter-svgrepo-com.svg":
/*!****************************************************!*\
  !*** ./src/images/socials/twitter-svgrepo-com.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/6bd5ae51c88850a73dec.svg";

/***/ }),

/***/ "./src/images/socials/youtube-svgrepo-com.svg":
/*!****************************************************!*\
  !*** ./src/images/socials/youtube-svgrepo-com.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/9e6e68bec2c1f5e29b3b.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdG8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzFhNzIiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0by8uL3NyYy9pbWFnZXMvZHJpbmtzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL29kaW4tcmVzdG8vLi9zcmMvaW1hZ2VzL3NvY2lhbHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0by8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RvLy4vc3JjL2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0by8uL3NyYy9qcy9kYXRhL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0by8uL3NyYy9qcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0by8uL3NyYy9qcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0by8uL3NyYy9qcy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdG8vLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0by93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tcmVzdG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tcmVzdG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9kcmluay0wMS5qcGdcIjogXCIuL3NyYy9pbWFnZXMvZHJpbmtzL2RyaW5rLTAxLmpwZ1wiLFxuXHRcIi4vZHJpbmstMDIuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL2RyaW5rcy9kcmluay0wMi5qcGdcIixcblx0XCIuL2RyaW5rLTAzLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9kcmlua3MvZHJpbmstMDMuanBnXCIsXG5cdFwiLi9kcmluay0wNC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvZHJpbmtzL2RyaW5rLTA0LmpwZ1wiLFxuXHRcIi4vZHJpbmstMDUuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL2RyaW5rcy9kcmluay0wNS5qcGdcIixcblx0XCIuL2RyaW5rLTA2LmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9kcmlua3MvZHJpbmstMDYuanBnXCIsXG5cdFwiLi9kcmluay0wNy5qcGdcIjogXCIuL3NyYy9pbWFnZXMvZHJpbmtzL2RyaW5rLTA3LmpwZ1wiLFxuXHRcIi4vZHJpbmstMDguanBnXCI6IFwiLi9zcmMvaW1hZ2VzL2RyaW5rcy9kcmluay0wOC5qcGdcIixcblx0XCIuL2RyaW5rLTA5LmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9kcmlua3MvZHJpbmstMDkuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9kcmlua3Mgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2ZhY2Vib29rLXN2Z3JlcG8tY29tLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9zb2NpYWxzL2ZhY2Vib29rLXN2Z3JlcG8tY29tLnN2Z1wiLFxuXHRcIi4vaW5zdGFncmFtLXN2Z3JlcG8tY29tLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy9zb2NpYWxzL2luc3RhZ3JhbS1zdmdyZXBvLWNvbS5zdmdcIixcblx0XCIuL3R3aXR0ZXItc3ZncmVwby1jb20uc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL3NvY2lhbHMvdHdpdHRlci1zdmdyZXBvLWNvbS5zdmdcIixcblx0XCIuL3lvdXR1YmUtc3ZncmVwby1jb20uc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL3NvY2lhbHMveW91dHViZS1zdmdyZXBvLWNvbS5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3NvY2lhbHMgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwiaW1wb3J0ICcuL3Nhc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tIFwiLi9qcy9oZWFkZXJcIjtcbmltcG9ydCB7IHJlbmRlckZvb3RlciB9IGZyb20gXCIuL2pzL2Zvb3RlclwiO1xuaW1wb3J0IHsgcmVuZGVyUGFnZUhvbWUgfSBmcm9tIFwiLi9qcy9ob21lXCI7XG5pbXBvcnQgeyByZW5kZXJQYWdlTWVudSB9IGZyb20gXCIuL2pzL21lbnVcIjtcbmltcG9ydCB7IHJlbmRlclBhZ2VDb250YWN0IH0gZnJvbSBcIi4vanMvY29udGFjdFwiO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9pbWFnZXMvbG9nby5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0ICRtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICRtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbiAgICByZXR1cm4gJG1haW47XG59XG5mdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuZnVuY3Rpb24gaW5pdFdlYnNpdGUoKSB7XG4gICAgY29uc3QgJGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICRjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVySGVhZGVyKCkpO1xuICAgICRjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVyRm9vdGVyKCkpO1xuXG4gICAgLy8gc2V0IGFjdGl2ZSBidG5cbiAgICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJcIikpO1xuICAgIHJlbmRlclBhZ2VIb21lKCk7XG59XG4vLyBoZWxwZXIgdG8gY3JlYXRlIGh0bWwgZWxlbWVudHNcbmZ1bmN0aW9uIGNyZWF0ZUh0bWxFbGVtZW50cyh0eXBlLCBpZCwgZGF0YXNldCwgY2xhc3NlcywgY29udGVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChpZCkgZWxlbWVudC5pZCA9IGlkO1xuICAgIGlmIChjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgICAgbGV0IGFycmF5Q2xhc3NlcyA9IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgYXJyYXlDbGFzc2VzLmZvckVhY2goKG15Q2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChteUNsYXNzKSk7XG4gICAgfVxuICAgIGlmIChkYXRhc2V0KSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nLGRhdGFzZXQpO1xuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmluaXRXZWJzaXRlKCk7XG5cbi8vIGltcG9ydCBpbWFnZXMgZnJvbSBhIGZvbGRlclxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgICBsZXQgaW1hZ2VzID0ge307XG4gICAgci5rZXlzKCkubWFwKChpdGVtLCBpbmRleCkgPT4geyBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtcbiAgICByZXR1cm4gaW1hZ2VzO1xufVxuXG4vLyBOQVZJR0FUSU9OXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFiQnRuID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRhYkJ0bi5kYXRhc2V0Lmxpbms7XG4gICAgICAgIC8vIGlmIGFscmVhZHkgb24gcGFnZSB3ZSBkbyBub3RoaW5nXG4gICAgICAgIGlmICh0YWJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbih0YWJCdG4pO1xuICAgICAgICBzd2l0Y2ggKHRhcmdldCkge1xuICAgICAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICAgICAgICByZW5kZXJQYWdlSG9tZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lbnVcIjpcbiAgICAgICAgICAgICAgICByZW5kZXJQYWdlTWVudSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNvbnRhY3RcIjpcbiAgICAgICAgICAgICAgICByZW5kZXJQYWdlQ29udGFjdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZW5kZXJQYWdlSG9tZSgpO1xuICAgICAgICB9XG4gICAgfSlcbn0pO1xuXG5cbmV4cG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50cywgaW1wb3J0QWxsLHNldEFjdGl2ZUJ1dHRvbiB9IiwiaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnRzLCBpbXBvcnRBbGwgfSBmcm9tIFwiLi4vaW5kZXhcIlxuXG4vLyBjcmVhdGUgSFRNTCBmb3IgdGhpcyBzZWN0aW9uXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IHBhZ2VJZCA9ICdjb250YWN0J1xuICAgIGNvbnN0ICRjb250YWN0ID0gY3JlYXRlSHRtbEVsZW1lbnRzKCdkaXYnLCBwYWdlSWQsIG51bGwsIG51bGwsIG51bGwpO1xuICAgIGNvbnN0ICRwYWdlVGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudHMoJ2gxJywgbnVsbCwgbnVsbCwgbnVsbCwgJ0NvbnRhY3QgVXMnKTtcbiAgICAkY29udGFjdC5hcHBlbmRDaGlsZCgkcGFnZVRpdGxlKTtcblxuICAgIC8vIEdPT0dMRSBNQVAgQVJFQVxuICAgIGNvbnN0ICRnbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJGdtYXAuY2xhc3NMaXN0LmFkZCgnZ21hcCcpO1xuICAgIGNvbnN0IGdtYXBXaWR0aCA9IDQwMDtcbiAgICBjb25zdCBnbWFwSGVpZ2h0ID0gMjAwO1xuICAgICRnbWFwLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibWFwLXJlc3BvbnNpdmVcIj5cbiAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkMzkxMjAuMDQzMTc4MDYxNTMhMmQtMTUxLjc0NTI2ODY3Njk3NDU1ITNkLTE2LjQ5ODAxODQwOTI4OTE3MyEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg3NmJkYmQxODhhNGE5OGFiJTNBMHgxNjBhMDg5ZTkyZDVjZTYxITJzQm9yYSUyMEJvcmEhNWUwITNtMiExc2VuITJzZnIhNHYxNjY5MTk2NDE5Njc2ITVtMiExc2VuITJzZnJcIiB3aWR0aD1cIiR7Z21hcFdpZHRofVwiIGhlaWdodD1cIiR7Z21hcEhlaWdodH1cIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICBcbiAgICAvLyBJTkZPIEFSRUFcbiAgICBjb25zdCAkY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAkY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29sdW1uLTEtMycpXG5cbiAgICAvL0hPVVJTXG4gICAgY29uc3QgJGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2JveC1ob3VycycpXG4gICAgY29uc3QgJGhvdXJzVGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudHMoJ2gyJywgbnVsbCwgbnVsbCwgbnVsbCwgJ0hvdXJzIG9mIHNlcnZpY2UnKTtcbiAgICBjb25zdCBob3Vyc0RhdGEgPSBbXG4gICAgICAgICdTdW5kYXk6IDhhbSAtIDhwbScsXG4gICAgICAgICdNb25kYXk6IDZhbSAtIDZwbScsXG4gICAgICAgICdUdWVzZGF5OiA2YW0gLSA2cG0nLFxuICAgICAgICAnV2VkbmVzZGF5OiA2YW0gLSA2cG0nLFxuICAgICAgICAnVGh1cnNkYXk6IDZhbSAtIDEwcG0nLFxuICAgICAgICAnRnJpZGF5OiA2YW0gLSAxMHBtJyxcbiAgICAgICAgJ1NhdHVyZGF5OiA4YW0gLSAxMHBtJyxcbiAgICBdXG5cbiAgICAvLyBjcmVhdGUgaHRtbCBsaXN0IGZyb20gYXJyYXlcbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0KGxpc3QpIHtcbiAgICAgICAgY29uc3QgJGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBsaS5pbm5lclRleHQgPSBsaXN0W2ldXG4gICAgICAgICAgICAkbGlzdC5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJGxpc3RcbiAgICB9XG4gICAgY29uc3QgJGhvdXJzTGlzdCA9IGNyZWF0ZUxpc3QoaG91cnNEYXRhKTtcblxuICAgICRob3Vycy5hcHBlbmRDaGlsZCgkaG91cnNUaXRsZSlcbiAgICAkaG91cnMuYXBwZW5kQ2hpbGQoJGhvdXJzTGlzdClcblxuICAgIC8vTE9DQVRJT04gQU5EIFBIT05FU1xuICAgIGNvbnN0ICRpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpXG4gICAgY29uc3QgJGxvY2F0aW9uVGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudHMoJ2gyJywgbnVsbCwgbnVsbCwgbnVsbCwgJ0xvY2F0aW9uJyk7XG4gICAgY29uc3QgJGxvY2F0aW9uVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50cygncCcsIG51bGwsIG51bGwsIG51bGwsICcxMiBDb2NvIHN0cmVldCwgUGFyaXMsIEZyYW5jZScpO1xuICAgIGNvbnN0ICRwaG9uZXNUaXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50cygnaDInLCBudWxsLCBudWxsLCBudWxsLCAnUGhvbmVzJyk7XG4gICAgY29uc3QgJHBob25lc1RleHQgPSBjcmVhdGVIdG1sRWxlbWVudHMoJ3AnLCBudWxsLCBudWxsLCBudWxsLCAnVGVsOisxMjMgMjEzMyAxMjMzMicpO1xuICAgICRpbmZvLmFwcGVuZENoaWxkKCRsb2NhdGlvblRpdGxlKTtcbiAgICAkaW5mby5hcHBlbmRDaGlsZCgkbG9jYXRpb25UZXh0KTtcbiAgICAkaW5mby5hcHBlbmRDaGlsZCgkcGhvbmVzVGl0bGUpO1xuICAgICRpbmZvLmFwcGVuZENoaWxkKCRwaG9uZXNUZXh0KTtcbiAgICBcbiAgICAvLyBTT0NJQUxTXG4gICAgY29uc3QgJHNvY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAkc29jaWFscy5jbGFzc0xpc3QuYWRkKCdzb2NpYWxzJylcbiAgICBjb25zdCAkc29jaWFsc1RpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnRzKCdoMicsIG51bGwsIG51bGwsIG51bGwsICdGb2xsb3cgVXMnKTtcblxuICAgIGNvbnN0IGljb25zU29jaWFscyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy9zb2NpYWxzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuICAgIFxuICAgIC8vIGFycmF5IG9mIGluZm8gb24gc29jaWFsc1xuICAgIGNvbnN0IHNvY2lhbHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdGYWNlYm9vaycsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cDovL3d3dy5mYWNlYm9vay5jb20nLFxuICAgICAgICAgICAgaWNvblBhdGg6IGljb25zU29jaWFsc1tPYmplY3Qua2V5cyhpY29uc1NvY2lhbHMpWzBdXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRmFjZWJvb2snLFxuICAgICAgICAgICAgbGluazogJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tJyxcbiAgICAgICAgICAgIGljb25QYXRoOiBpY29uc1NvY2lhbHNbT2JqZWN0LmtleXMoaWNvbnNTb2NpYWxzKVsxXV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0ZhY2Vib29rJyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwOi8vd3d3LmZhY2Vib29rLmNvbScsXG4gICAgICAgICAgICBpY29uUGF0aDogaWNvbnNTb2NpYWxzW09iamVjdC5rZXlzKGljb25zU29jaWFscylbMl1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdGYWNlYm9vaycsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cDovL3d3dy5mYWNlYm9vay5jb20nLFxuICAgICAgICAgICAgaWNvblBhdGg6IGljb25zU29jaWFsc1tPYmplY3Qua2V5cyhpY29uc1NvY2lhbHMpWzNdXVxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNvY2lhbE5hdihsaXN0KSB7XG4gICAgICAgIGNvbnN0ICRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgJGxpc3QuY2xhc3NMaXN0LmFkZCgnc29jaWFscy1saXN0JylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBjcmVhdGVTb2NpYWwoc29jaWFsc1tpXS5uYW1lLCBzb2NpYWxzW2ldLmxpbmssIHNvY2lhbHNbaV0uaWNvblBhdGgpXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChsaW5rKVxuICAgICAgICAgICAgJGxpc3QuYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICRsaXN0XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNvY2lhbChuYW1lLCBsaW5rLCBpY29uUGF0aCkge1xuICAgICAgICBjb25zdCBzb2NpYWxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBzb2NpYWxMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmspO1xuICAgICAgICBjb25zdCBzb2NpYWxJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgc29jaWFsSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblBhdGgpO1xuICAgICAgICBcbiAgICAgICAgc29jaWFsSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgbmFtZSk7XG4gICAgICAgIHNvY2lhbExpbmsuYXBwZW5kQ2hpbGQoc29jaWFsSW1nKTtcbiAgICAgICAgcmV0dXJuIHNvY2lhbExpbmtcbiAgICB9XG4gICAgY29uc3QgJHNvY2lhbExpc3QgPSBjcmVhdGVTb2NpYWxOYXYoc29jaWFscylcblxuICAgICRzb2NpYWxzLmFwcGVuZENoaWxkKCRzb2NpYWxzVGl0bGUpXG4gICAgJHNvY2lhbHMuYXBwZW5kQ2hpbGQoJHNvY2lhbExpc3QpXG5cbiAgICAkY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoJGhvdXJzKVxuICAgICRjb250YWN0SW5mby5hcHBlbmRDaGlsZCgkaW5mbylcbiAgICAkY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoJHNvY2lhbHMpXG5cbiAgICAkY29udGFjdC5hcHBlbmRDaGlsZCgkZ21hcClcbiAgICAkY29udGFjdC5hcHBlbmRDaGlsZCgkY29udGFjdEluZm8pXG5cbiAgICByZXR1cm4gJGNvbnRhY3Q7XG59XG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG5leHBvcnQgeyByZW5kZXIgYXMgcmVuZGVyUGFnZUNvbnRhY3QgfSIsImltcG9ydCB7aW1wb3J0QWxsIH0gZnJvbSBcIi4uLy4uL2luZGV4XCJcbi8vIGltcG9ydCBpbWFnZXNcbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uLy4uL2ltYWdlcy9kcmlua3MnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG5cbi8vIGFycmF5IGNvbnRhaW5pbmcgdGhlIGRhdGFcbmNvbnN0IGZvb2RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0NvY28gRmV2ZXInLFxuICAgICAgICBkZXNjOiBgV2hlbiBpdCdzIHRvbyBob3QgdG8gaGFuZGxlLCB0aGlzIGlzIHRoZSBkcmluayBmb3IgeW91IWAsXG4gICAgICAgIHByaWNlOiAnMTAkJyxcbiAgICAgICAgc3JjOiBpbWFnZXNbT2JqZWN0LmtleXMoaW1hZ2VzKVswXV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NvY28gTWFkbmVzcycsXG4gICAgICAgIGRlc2M6IGBDcmF6eSBjb2NvbnV0IGRyaW5rIHdpdGggYmFuYW5hIGFuZCB0YWJhc2NvIWAsXG4gICAgICAgIHByaWNlOiAnMjAkJyxcbiAgICAgICAgc3JjOiBpbWFnZXNbT2JqZWN0LmtleXMoaW1hZ2VzKVsxXV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NvY28gUGFzc2lvbicsXG4gICAgICAgIGRlc2M6IGBGb3IgdGhlIHBhc3Npb24gbG92ZSwgdGhpcyBpcyBhIHN3ZWV0IGFuZCBmcnVpdHkgZHJpbmsuYCxcbiAgICAgICAgcHJpY2U6ICcxNSQnLFxuICAgICAgICBzcmM6IGltYWdlc1tPYmplY3Qua2V5cyhpbWFnZXMpWzJdXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29jbyBSaWNvJyxcbiAgICAgICAgZGVzYzogYFdoZW4geW91IG5lZWQgc29tZSBjb2ZlZSwgYnV0IGFsc28gd2FudHMgc29tZSBiYW5hbmEganVpY2Ugd2l0aCBpdC5gLFxuICAgICAgICBwcmljZTogJzE2JCcsXG4gICAgICAgIHNyYzogaW1hZ2VzW09iamVjdC5rZXlzKGltYWdlcylbM11dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDb2NvIEV4dHJhdmFnZW56YScsXG4gICAgICAgIGRlc2M6IGBDb2NvbnV0IGp1aWNlIG1peGVkIHdpdGggdm9ka2EgYW5kIGNvY29udXQgc2F1Y2UhYCxcbiAgICAgICAgcHJpY2U6ICcxNyQnLFxuICAgICAgICBzcmM6IGltYWdlc1tPYmplY3Qua2V5cyhpbWFnZXMpWzRdXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29jbyBudXRzJyxcbiAgICAgICAgZGVzYzogYFdlIGdpdmUgeW91IGNvY28sIHdlIGdpdmUgeW91IG51dHMgIWAsXG4gICAgICAgIHByaWNlOiAnMTYkJyxcbiAgICAgICAgc3JjOiBpbWFnZXNbT2JqZWN0LmtleXMoaW1hZ2VzKVs1XV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NvY28gc3RyYXdiZXJyeSBmcmVuenknLFxuICAgICAgICBkZXNjOiBgRm9yIHRoZSBzdHJhd2JlcnJ5IGxvdmVycywgdGhlIGNvY28ganVpY2UgeW91IHdpbGwgbG92ZS5gLFxuICAgICAgICBwcmljZTogJzEzJCcsXG4gICAgICAgIHNyYzogaW1hZ2VzW09iamVjdC5rZXlzKGltYWdlcylbNl1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDb2NvIHR1ZXNkYXknLFxuICAgICAgICBkZXNjOiBgQSBiaXQgb2YgY29jb251dCwgYSBiaXQgb2YgY2luYW1tb24sIGEgYml0IG9mIHJodW0sIGEgYml0IG9mIHBpbmVhcHBsZSBqdWljZSB0b28hYCxcbiAgICAgICAgcHJpY2U6ICcxNyQnLFxuICAgICAgICBzcmM6IGltYWdlc1tPYmplY3Qua2V5cyhpbWFnZXMpWzddXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29jbyBsYSB2aXN0YScsXG4gICAgICAgIGRlc2M6IGBUaGUgYmVzdCBjb2NvbnV0IGRyaW5rIGV2ZXIsIGp1c3QgY29jb251dCB3aXRoIHRlcXVpbGEhYCxcbiAgICAgICAgcHJpY2U6ICc5JCcsXG4gICAgICAgIHNyYzogaW1hZ2VzW09iamVjdC5rZXlzKGltYWdlcylbOF1dXG4gICAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBmb29kczsiLCJpbXBvcnQge2NyZWF0ZUh0bWxFbGVtZW50c30gZnJvbSBcIi4uL2luZGV4XCJcblxuZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgY29uc3QgJGZvb3RlciA9IGNyZWF0ZUh0bWxFbGVtZW50cygnZm9vdGVyJywnZm9vdGVyJyxudWxsLG51bGwsJ8KpIHRoZSBjb2NvbnV0IGNvbXBhbnknKTtcblxuICAgIHJldHVybiAkZm9vdGVyXG59XG5cbmV4cG9ydCB7cmVuZGVyIGFzIHJlbmRlckZvb3Rlcn0iLCJpbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudHMgfSBmcm9tIFwiLi4vaW5kZXhcIlxuXG5mdW5jdGlvbiByZW5kZXJOYXYoKSB7XG4gICAgY29uc3QgbmF2SXRlbXMgPSBbJ2hvbWUnLCAnbWVudScsICdjb250YWN0JyxdXG4gICAgY29uc3QgJHRhYnMgPSBjcmVhdGVIdG1sRWxlbWVudHMoJ25hdicsIG51bGwsIG51bGwsICd0YWJzJywgbnVsbCk7XG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBuYXZJdGVtID0gY3JlYXRlSHRtbEVsZW1lbnRzKCdzcGFuJywgbnVsbCwgJ2RhdGEtbGluaycsICd0YWInLCBpdGVtKTtcbiAgICAgICAgbmF2SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycsIGl0ZW0pO1xuICAgICAgICAkdGFicy5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuICR0YWJzO1xufVxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNvbnN0IG15TmF2ID0gcmVuZGVyTmF2KCk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGxvZ28uaW5uZXJUZXh0ID0gXCJSZXN0byBDb2NvXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChteU5hdik7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cbmV4cG9ydCB7IHJlbmRlciBhcyByZW5kZXJIZWFkZXIgfSIsImltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50cyxzZXRBY3RpdmVCdXR0b259IGZyb20gXCIuLi9pbmRleFwiXG5pbXBvcnQgeyByZW5kZXJQYWdlTWVudSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBpbWdIZXJvSG9tZSBmcm9tICcuLi9pbWFnZXMvaGVyby1jb2NvLndlYnAnO1xuLy8gY3JlYXRlIEhUTUwgZm9yIHRoaXMgc2VjdGlvblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjb25zdCBwYWdlSWQgPSAnaG9tZSc7XG4gICAgY29uc3QgJGhvbWUgPSBjcmVhdGVIdG1sRWxlbWVudHMoJ2RpdicsIHBhZ2VJZCwgbnVsbCwgbnVsbCwgbnVsbCk7XG5cbiAgICAvLyBIRVJPIEFSRUFcbiAgICBjb25zdCAkaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICRoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBjb25zdCBoZXJvVGV4dCA9IFwiQXJlIHlvdSBsb29raW5nIGZvciB0aGUgbW9zdCBkZWxpY2lvdXMgY29jb251dCBjb2NrdGFpbCBpbiB0aGUgd29ybGQgPyBTYXkgbm8gbW9yZSwgeW91IGFyZSBpbiBmb3IgYSB0cmVhdCFcIjtcbiAgICBjb25zdCAkaGVyb0NvbnRlbnRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJGhlcm9Db250ZW50TGVmdC5jbGFzc0xpc3QuYWRkKCdoZXJvLXRleHQnKTtcbiAgICBjb25zdCAkaGVyb1RpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnRzKCdoMicsIG51bGwsIG51bGwsIG51bGwsICdPaCEgTXkhIEdvZCEgU28gZ29vZCEnKTtcbiAgICBjb25zdCAkaGVyb1RleHQgPSBjcmVhdGVIdG1sRWxlbWVudHMoJ3NwYW4nLCBudWxsLCBudWxsLCBudWxsLCBoZXJvVGV4dCk7XG4gICAgJGhlcm9Db250ZW50TGVmdC5hcHBlbmRDaGlsZCgkaGVyb1RleHQpO1xuICAgIGNvbnN0IGhlcm9JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBoZXJvSW1nLnNyYyA9IGltZ0hlcm9Ib21lO1xuICAgIGhlcm9JbWcuYWx0ID0gXCJSZXN0byBDb2NvIGlzIHRoZSBiZXN0IGluIHRvd24gIVwiO1xuICAgICRoZXJvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgYmFja2dyb3VuZC1pbWFnZTp1cmwoJyR7aGVyb0ltZy5zcmN9JylgKTtcbiAgICAkaGVyb0NvbnRlbnRMZWZ0LnByZXBlbmQoJGhlcm9UaXRsZSk7XG4gICAgJGhlcm8uYXBwZW5kQ2hpbGQoJGhlcm9Db250ZW50TGVmdCk7XG5cbiAgICBjb25zdCAkaGVyb0NvbnRlbnRSaWdodCA9IGNyZWF0ZUh0bWxFbGVtZW50cygnZGl2JywgbnVsbCwgbnVsbCwgJ2hlcm8tY29udGVudC1yaWdodCcsIG51bGwpO1xuICAgIGNvbnN0ICRidG5NZW51ID0gY3JlYXRlSHRtbEVsZW1lbnRzKCdhJywgbnVsbCwgXCJtZW51XCIsICdidG4nLCAnU2VlIG91ciBtZW51Jyk7XG4gICAgJGhlcm9Db250ZW50UmlnaHQuYXBwZW5kQ2hpbGQoJGJ0bk1lbnUpO1xuXG4gICAgJGhlcm8uYXBwZW5kQ2hpbGQoJGhlcm9Db250ZW50UmlnaHQpO1xuICAgICRob21lLmFwcGVuZENoaWxkKCRoZXJvKTtcblxuICAgIHJldHVybiAkaG9tZTtcbn1cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcblxuICAgIC8vIG90aGVyIGJ1dHRvbiB0byBnbyB0byBtZW51IHBhZ2VcbmNvbnN0ICRidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uPW1lbnVdJyk7XG4kYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrIG1lbnUnKTtcbiAgICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWxpbms9bWVudV1cIikpXG4gICAgcmVuZGVyUGFnZU1lbnUoKTtcbn0pXG59XG5leHBvcnQgeyByZW5kZXIgYXMgcmVuZGVyUGFnZUhvbWUgfSIsImltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50cywgaW1wb3J0QWxsIH0gZnJvbSBcIi4uL2luZGV4XCJcbmltcG9ydCBmb29kcyBmcm9tIFwiLi9kYXRhL2Zvb2RcIlxuXG4vLyBjcmVhdGUgSFRNTCBmb3IgdGhpcyBzZWN0aW9uXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IHBhZ2VJZCA9ICdtZW51J1xuICAgIGNvbnN0ICRtZW51ID0gY3JlYXRlSHRtbEVsZW1lbnRzKCdkaXYnLCBwYWdlSWQsIG51bGwsIG51bGwsIG51bGwpO1xuICAgIGNvbnN0ICRwYWdlVGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudHMoJ2gxJywgbnVsbCwgbnVsbCwgbnVsbCwgJ091ciBkZWxpY2lvdXMgZHJpbmtzJyk7XG4gICAgJG1lbnUuYXBwZW5kQ2hpbGQoJHBhZ2VUaXRsZSk7XG5cbiAgICBjb25zdCAkZm9vZEdyaWQgPSBjcmVhdGVIdG1sRWxlbWVudHMoJ2RpdicsIG51bGwsIG51bGwsICdhcnRpY2xlcycsIG51bGwpO1xuICAgICRtZW51LmFwcGVuZENoaWxkKCRmb29kR3JpZCk7XG5cbiAgICAvLyBjcmVhdGUgYSBmb29kIGl0ZW0gY2FyZFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvb2QoeyBuYW1lLCBkZXNjLCBwcmljZSwgc3JjIH0pIHtcbiAgICAgICAgY29uc3QgZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICAgICAgZm9vZC5jbGFzc0xpc3QuYWRkKCdmb29kJyk7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgICBpbWcuYWx0ID0gbmFtZTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGZvb2ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgY29uc3QgZm9vZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGZvb2RUZXh0LnRleHRDb250ZW50ID0gZGVzYztcblxuICAgICAgICBjb25zdCBmb29kUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBmb29kUHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKVxuICAgICAgICBmb29kUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICAgICAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChmb29kVGV4dClcblxuICAgICAgICBmb29kLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICAgICAgZm9vZC5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xuICAgICAgICBmb29kLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgZm9vZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICAgICAgcmV0dXJuIGZvb2RcbiAgICB9XG5cbiAgICBmb29kcy5mb3JFYWNoKChmb29kKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb2RIVE1MID0gY3JlYXRlRm9vZChmb29kKTtcbiAgICAgICAgJGZvb2RHcmlkLmFwcGVuZENoaWxkKGZvb2RIVE1MKTtcbiAgICB9KVxuICAgIHJldHVybiAkbWVudTtcblxufVxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuZXhwb3J0IHsgcmVuZGVyIGFzIHJlbmRlclBhZ2VNZW51IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=