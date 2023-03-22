import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ProgressBar } from 'react-loader-spinner';

export class App extends Component {
  state = {
    data: [],
    searchValue: '',
    page: 1,
    modalHidden: true,
    largeImage: '',
    loaderHidden: true,
  };

  getSearchValue = value => {
    this.setState({ searchValue: value.trim() });
  };

  getNewImages = data => {
    const images = data.hits;
    this.setState({ data: images });
    this.toggleLoader();
  };

  getImages = data => {
    const images = data.hits;

    this.setState({
      data: [...this.state.data, ...images],
    });
    this.toggleLoader();
  };

  getPage = page => {
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
    const { data, largeImage, page, searchValue, modalHidden, loaderHidden } =
      this.state;
    let loadMore = null;
    let modal = null;
    let loader = null;
    if (loaderHidden === false) {
      loader = <Loader />;
    }
    if (data.length > 12) {
      loadMore = (
        <Button getPage={this.getPage} toggleLoader={this.toggleLoader} />
      );
    }

    if (modalHidden === false) {
      modal = <Modal image={largeImage} toggleModal={this.toggleModal} />;
    }
    return (
      <div>
        <Searchbar
          getSearchValue={this.getSearchValue}
          getImages={this.getImages}
          getNewImages={this.getNewImages}
          page={page}
          toggleLoader={this.toggleLoader}
        />

        <ImageGallery
          searchValue={searchValue}
          data={data}
          toggleModal={this.toggleModal}
          toggleLoader={this.toggleLoader}
          loaderHidden={this.state.loaderHidden}
        />
        {loadMore}
        {modal}
        {loader}
      </div>
    );
  }
}
