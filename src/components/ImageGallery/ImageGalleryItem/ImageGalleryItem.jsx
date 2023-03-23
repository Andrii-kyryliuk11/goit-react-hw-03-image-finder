import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ data, toggleModal }) => {
  return data.map(image => {
    return (
      <li key={image.id}>
        <img
          src={image.webformatURL}
          alt=""
          className={css.imageGalleryItem__image}
          onClick={() => {
            toggleModal(image.largeImageURL);
          }}
        />
      </li>
    );
  });
};
