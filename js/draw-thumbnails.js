import {createSimilarPhotos} from './data.js';

const similarListElement = document.querySelector('.pictures');
const similarListTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarUserPhotos = createSimilarPhotos();
const similarUserFragment = document.createDocumentFragment();

const drawThumbnails = () =>{
  similarUserPhotos.forEach((photo)=> {
    const userElement = similarListTemplate.cloneNode(true);
    userElement.querySelector('.picture__img').src = photo.url;
    userElement.querySelector('.picture__likes').textContent = photo.likes;
    userElement.querySelector('.picture__comments').textContent = photo.comments.length;
    similarUserFragment.append(userElement);
  });

  similarListElement.append(similarUserFragment);
};

export {drawThumbnails};
