import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPictures } from './js/pixabay-api';
import { createMarkup, displayErrorToast } from './js/render-functions';

const formSearch = document.querySelector('.js-search');
const listImages = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

loader.style.display = 'none';
formSearch.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  listImages.innerHTML = '';
  loader.style.display = 'block';

  const inputValue = event.target.elements.search.value.trim();

  if (!inputValue) {
    loader.style.display = 'none';
    return;
  }

  getPictures(inputValue)
    .then(data => {
      loader.style.display = 'none';

      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      listImages.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      const refreshPage = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      refreshPage.refresh();

      formSearch.reset();
    })
    .catch(err => {
      loader.style.display = 'none';
      console.log(err);
    });
}
