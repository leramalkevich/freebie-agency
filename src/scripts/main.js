import Splide from '@splidejs/splide';
import '../styles/styles.scss';

new Splide('.splide').mount();

let commonBg = document.getElementById('commonBg');
let buttonsToChangeBg = document.querySelectorAll('.mainBlockActionButton');
let buttonsArray = Array.from(buttonsToChangeBg);
const bgImages = [
    "url('../assets/images/main-bg-image.png')",
    "url('../assets/images/main-bg-image2.jpg')",
    "url('../assets/images/main-bg-image3.jpg')",
    "url('../assets/images/main-bg-image4.webp')",
];
let popUp = document.getElementById('popUp');
let closePopUp = document.querySelectorAll('.closePopUp');
let hidePopUp = Array.from(closePopUp);
let showPopUp = document.querySelectorAll('.showPopUp');

if (commonBg) {
    buttonsArray.forEach(item => item.addEventListener('click', function () {
        buttonsArray.forEach(notActive => notActive.classList.remove('active'));
        item.classList.add('active');
        let index = generateUniqueRandom(0, bgImages.length - 1, 0);
        commonBg.style.backgroundImage = bgImages[index];
    }));
}
if (showPopUp && popUp && hidePopUp) {
    Array.from(showPopUp).forEach(item=>item.addEventListener('click', function (){
        popUp.classList.add('open');
    }));
    hidePopUp.forEach(item=>item.addEventListener('click', function (){
        popUp.classList.remove('open');
    }));
}
function generateUniqueRandom(min, max, count) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const uniqueNumbers = new Set();
    const result = [];

    while (result.length <= count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);// Максимум и минимум включаются
        if (!uniqueNumbers.has(randomNumber)) {
            uniqueNumbers.add(randomNumber);
            result.push(randomNumber);
        }
    }
    return result;
}