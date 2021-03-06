const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryLiseEl = document.querySelector(".gallery");

// const toAddImages = function (massive) {
//     massive.map((el) => {
//         const galleryItemEl = document.createElement("li");
//         galleryItemEl.classList.add("js-styles-gallery");
//         const galleryimageEl = document.createElement("img");
//         galleryimageEl.src = el.url;
//         galleryimageEl.alt = el.alt;
//         galleryimageEl.width = "450";
//         galleryItemEl.append(galleryimageEl);
//         galleryLiseEl.append(galleryItemEl);
//     } );
// }
// toAddImages(images);

function toAddImages() {
  const result = images.map((el) => {
    return `<li class="js-styles-gallery">
    <img src = "${el.url}" alt = "${el.alt}" width="450">
    </li>`;
  }).join("");
  return result;
}
const list =toAddImages();
galleryLiseEl.insertAdjacentHTML("beforeend",list);

