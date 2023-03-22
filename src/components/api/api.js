const KEY = '33396439-d181ce3350cbdcaf61f3b27a3';
const API = 'https://pixabay.com/api/';

function searchImages(value, page) {
  return fetch(
    `${API}?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => {
    return res.json();
  });
}

export default searchImages;
