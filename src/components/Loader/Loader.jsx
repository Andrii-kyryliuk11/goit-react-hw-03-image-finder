import { Dna } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <Dna />
    </div>
  );
}

export default Loader;
