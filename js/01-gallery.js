import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.addEventListener("click", onClick);

let instance;

const item = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </div>`;
  })
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", item); // помещаем в DOM

function onClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

    instance.show();
  }
}

function onKeyPressEsc(event) {
  console.log(event);
  if (event.code === "Escape") {
    instance.close();
  }
}
document.addEventListener("keydown", onKeyPressEsc);

// const galleryContainer = document.querySelector(".gallery");

// function createMarkup(arr) {
//   const markup = arr
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//      <a class="gallery__link" href="${original}">
//        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
//     </a>
//   </div>`;
//     })
//     .join("");
//   return markup;
// }

// createMarkup(galleryItems);

// galleryContainer.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
