import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    page: 1,
  };

  render() {
    if (this.props.data) {
      return (
        <div>
          {this.props.data && (
            <ul className={css.imageGallery}>
              <ImageGalleryItem
                data={this.props.data}
                toggleModal={this.props.toggleModal}
              />
            </ul>
          )}
        </div>
      );
    }
  }
}
