import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// 1 Створення і рендер розмітки на підставі масиву даних galleryItems
//  і наданого шаблону елемента галереї.

// 2 Реалізація делегування на div.gallery 
// і отримання url великого зображення.

const galleryContainer = document.querySelector('.gallery');
const cardsPicture = createPictureCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsPicture);
galleryContainer.addEventListener('click', onPictureComntainerClick);

// document.body.addEventListener('click', onPictureComntainerClick);

function createPictureCards(picture) {
    return picture.map(({preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" >
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
    }).join('');
}


function onPictureComntainerClick(event) {
    console.log(event.target);
    const imgEl = event.target.nodeName;
    if (!event.target.nodeName === 'IMG') {
        return;
    }

}