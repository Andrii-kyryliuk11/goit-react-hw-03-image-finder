import { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    const { toggleModal } = this.props;
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  handleBackdropClick = e => {
    const { toggleModal } = this.props;
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}
