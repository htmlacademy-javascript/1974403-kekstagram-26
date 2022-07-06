const closeButton = document.querySelector('.big-picture__cancel');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const pictureDescription = bigPicture.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const commentItem = bigPicture.querySelector('.social__comment');

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeEventListener();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closeModal();
};

function removeEventListener() {
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', onCloseButtonClick);
}

function addEventListener() {
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onCloseButtonClick);
}

const renderComments = (array) => {
  array.forEach((item) => {
    const comment = commentItem.cloneNode(true);
    const commentImg = comment.querySelector('.social__picture');
    commentImg.src = item.avatar;
    commentImg.alt = item.name;
    comment.querySelector('.social__text').textContent = item.message;
    commentsList.append(comment);
  });
};

const fillBigPicture = (picture) => {
  commentsList.innerHTML = '';
  bigPictureImage.src = picture.url;
  bigPictureImage.alt = picture.description;
  likesCount.textContent = picture.likes;
  pictureDescription.textContent = picture.description;
  renderComments(picture.comments);
};


const showBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
  fillBigPicture(picture);
  addEventListener();
};


export {showBigPicture};
