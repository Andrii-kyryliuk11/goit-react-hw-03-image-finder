import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    data: [],
    searchValue: '',
    page: 1,
    modalHidden: false,
    largeImage: '',
    showLoader: false,
  };

  updateSearchValue = value => {
    this.setState({ searchValue: value.trim() });
  };

  updateNewImagesArray = data => {
    const images = data.hits;
    this.setState({ data: images });
    this.toggleLoader();
  };

  updateImagesArray = data => {
    const images = data.hits;

    this.setState(prevState => ({
      data: [...prevState.data, ...images],
    }));
    this.toggleLoader();
  };

  updatePage = page => {
    this.setState({ page: page });
  };

  toggleModal = image => {
    this.setState(prevState => ({
      modalHidden: !prevState.modalHidden,
      largeImage: image,
    }));
  };

  toggleLoader = () => {
    this.setState(prevState => ({
      loaderHidden: !prevState.loaderHidden,
    }));
  };

  render() {
    const { data, largeImage, page, modalHidden, showLoader } = this.state;

    return (
      <div>
        <Searchbar
          handleSearchValue={this.updateSearchValue}
          handleImages={this.updateImagesArray}
          handleNewImages={this.updateNewImagesArray}
          page={page}
          toggleLoader={this.toggleLoader}
        />

        <ImageGallery data={data} toggleModal={this.toggleModal} />
        {data.length >= 12 && (
          <Button
            handlePage={this.updatePage}
            toggleLoader={this.toggleLoader}
          />
        )}
        {modalHidden && (
          <Modal image={largeImage} toggleModal={this.toggleModal} />
        )}
        {showLoader && <Loader />}
      </div>
    );
  }
}
