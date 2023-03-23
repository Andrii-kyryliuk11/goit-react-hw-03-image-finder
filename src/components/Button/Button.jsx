import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  state = {
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { handlePage } = this.props;
    if (prevState.page !== page) {
      handlePage(page);
    }
  }
  render() {
    const { toggleLoader } = this.props;
    return (
      <button
        type="button"
        onClick={() => {
          toggleLoader();
          this.setState(prevState => {
            return {
              page: prevState.page + 1,
            };
          });
        }}
        className={css.button}
      >
        Load more
      </button>
    );
  }
}
