import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const imagesList = createImagesCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesList);
galleryContainer.addEventListener('click', onPictureComntainerClick);


function createImagesCards(picture) {
    return picture.map(({ preview, original, description }) => {
        
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
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
    event.preventDefault();
    // console.log(event.target);

    const imgEl = event.target.nodeName;
    if (!imgEl === 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(`
        <img src="${event.target.closest('img').dataset.source}" width="800" height="600">
    `);

    instance.show();
}


document.addEventListener("keydown", event => {
if (!document.querySelector('.basicLightbox')) {
      return;
}
    const basicLightboxEL = document.querySelector('.basicLightbox');
    if (event.code === 'Escape') {
        basicLightboxEL.remove();
    }

});
