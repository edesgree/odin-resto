import { createHtmlElements, importAll } from "../index"
//createHtmlElements(type,id,dataset,classes,content)
function createContact() {
    console.log('contact');
    const pageId = 'contact'
    const $contact = createHtmlElements('div', pageId, null, null, null);
    const $pageTitle = createHtmlElements('h1', null, null, null, 'Contact Us');
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
    const $hoursTitle = createHtmlElements('h2', null, null, null, 'Hours of service');
    const hoursData = [
        'Sunday: 8am - 8pm',
        'Monday: 6am - 6pm',
        'Tuesday: 6am - 6pm',
        'Wednesday: 6am - 6pm',
        'Thursday: 6am - 10pm',
        'Friday: 6am - 10pm',
        'Saturday: 8am - 10pm',
    ]
    console.log('hoursData', hoursData[0])
    console.log('hoursData', hoursData[Object.keys(hoursData)[0]])
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
    console.log('$hoursList', $hoursList)
    $hours.appendChild($hoursTitle)
    $hours.appendChild($hoursList)
    console.log('$hours', $hours)

    //LOCATION AND PHONES
    const $info = document.createElement('div');
    $info.classList.add('info')
    const $locationTitle = createHtmlElements('h2', null, null, null, 'Location');
    const $locationText = createHtmlElements('p', null, null, null, '12 Coco street, Paris, France');
    const $phonesTitle = createHtmlElements('h2', null, null, null, 'Phones');
    const $phonesText = createHtmlElements('p', null, null, null, 'Tel:+123 2133 12332');
    $info.appendChild($locationTitle);
    $info.appendChild($locationText);
    $info.appendChild($phonesTitle);
    $info.appendChild($phonesText);
    console.log('$info', $info)
    // SOCIALS
    const $socials = document.createElement('div');
    $socials.classList.add('socials')
    const $socialsTitle = createHtmlElements('h2', null, null, null, 'Follow Us');

    const iconsSocials = importAll(require.context('../images/socials', false, /\.(png|jpe?g|svg)$/));
    console.log("iconsSocials keys", iconsSocials)
    console.log("iconsSocials keys0", iconsSocials[Object.keys(iconsSocials)[0]])
    //console.log("iconsSocials keys1", Object.keys(iconsSocials)[0])
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
    console.log('socials', socials[0].name)
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
        console.log('iconPath', iconPath)
        socialImg.setAttribute('alt', name);
        socialLink.appendChild(socialImg);
        return socialLink
    }
    const $socialList = createSocialNav(socials)
    console.log('$socialList', $socialList)
    $socials.appendChild($socialsTitle)
    $socials.appendChild($socialList)

    $contactInfo.appendChild($hours)
    $contactInfo.appendChild($info)
    $contactInfo.appendChild($socials)

    $contact.appendChild($gmap)
    $contact.appendChild($contactInfo)
    console.log('$contactInfo', $contactInfo)

    return $contact;


}
function render() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}
export { render as renderPageContact }