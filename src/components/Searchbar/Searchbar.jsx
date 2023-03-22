import { Component } from 'react';
import css from './Searchbar.module.css';
import searchImages from 'components/api/api';
export class Searchbar extends Component {
  state = {
    data: [],
    searchValue: '',
    prevSearch: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      const { searchValue } = this.state;
      const { page } = this.props;
      searchImages(searchValue, page).then(res => this.props.getImages(res));
    }
  }

  render() {
    const { searchValue, page } = this.state;
    return (
      <header className={css.searchbar}>
        <form
          className={css.form}
          onSubmit={e => {
            e.preventDefault();

            if (this.state.prevSearch !== searchValue && searchValue !== '')
              searchImages(searchValue, page)
                .then(res => {
                  this.props.getNewImages(res);
                })
                .catch(error => console.log(error))
                .finally(() => {
                  this.props.toggleLoader();
                });

            this.setState({ prevSearch: searchValue });
          }}
        >
          <button type="submit" className={css.searchForm__button}>
            <span className={css.searchForm__button__label}>Search</span>
          </button>

          <input
            onChange={e => {
              this.setState({
                searchValue: e.currentTarget.value,
              });
            }}
            className={css.searchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
          />
        </form>
      </header>
    );
  }
}
