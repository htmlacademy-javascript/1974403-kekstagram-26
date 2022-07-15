import { isEscapeKey } from './util.js';
import { isUploadFormValid } from './form-validate.js';
import { onControlSmallerClick, onControlBiggerClick, resetScale } from './scale-image.js';
import { changeEffect } from './photo-effect.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'webp'];

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadSelectImage = document.querySelector('#upload-select-image');
const form = document.querySelector('#upload-select-image');

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');

const imagePreview = document.querySelector('.img-upload__preview img');
const effectsListElement = document.querySelector('.effects__list');
const effectLevelFieldset = document.querySelector('.effect-level');

const closeModal = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadSelectImage.reset();
  form.reset();
  resetScale();
  imagePreview.style.filter = null;
  removeEventListener();
  if (document.querySelector('.pristine-error')) {
    document.querySelector('.pristine-error').innerHTML='';
  }
};

const openModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  effectLevelFieldset.classList.add('hidden');
  addEventListener();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !evt.target.closest('.text__hashtags') && !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeModal();
  }
};

const onUploadCancelClick = (evt) => {
  evt.preventDefault();
  closeModal();
};

const onSliderChange = (evt) =>{
  evt.preventDefault();
  changeEffect(evt.target.value);
};

function removeEventListener() {
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadCancel.removeEventListener('click', onUploadCancelClick);
  scaleControlSmaller.removeEventListener('click', onControlSmallerClick);
  scaleControlBigger.removeEventListener('click', onControlBiggerClick);
  effectsListElement.removeEventListener('change', onSliderChange);
}

function addEventListener() {
  document.addEventListener('keydown',onDocumentKeydown);
  uploadCancel.addEventListener('click',  onUploadCancelClick);
  scaleControlSmaller.addEventListener('click', onControlSmallerClick);
  scaleControlBigger.addEventListener('click', onControlBiggerClick);
  effectsListElement.addEventListener('change', onSliderChange);
}

const onInputUploadFormChange = (evt) => {
  evt.preventDefault();
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imagePreview.src = URL.createObjectURL(file);
    openModal();
  }
};

const onFormSubmit = (evt) => {
  if (!isUploadFormValid()) {
    evt.preventDefault();
  }
};

const initUploadFormAction = () => {
  uploadFile.addEventListener('change', onInputUploadFormChange);
  form.addEventListener('submit', onFormSubmit);
};

export {initUploadFormAction};
