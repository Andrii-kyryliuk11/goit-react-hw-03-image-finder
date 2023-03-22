import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  state = {
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.getPage(this.state.page);
    }
  }
  render() {
    return (
      <button
        type="button"
        onClick={() => {
          this.props.toggleLoader();
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
