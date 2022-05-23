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

const imagesGalleryList = document.querySelector('.gallery')

const createImages = images.map((image) => `<li><img src = ${image.url} alt = '${image.alt}' width = '640'></img></li>`).join('');

imagesGalleryList.insertAdjacentHTML('afterbegin', createImages)
imagesGalleryList.style.display = "grid";
imagesGalleryList.style.listStyle = "none";
console.log(imagesGalleryList);
