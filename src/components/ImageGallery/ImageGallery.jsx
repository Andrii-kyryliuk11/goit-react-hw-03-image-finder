import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    page: 1,
  };

  render() {
    const { data, toggleModal } = this.props;
    if (data) {
      return (
        <div>
          {data && (
            <ul className={css.imageGallery}>
              <ImageGalleryItem data={data} toggleModal={toggleModal} />
            </ul>
          )}
        </div>
      );
    }
  }
}
