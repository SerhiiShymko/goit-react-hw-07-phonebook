import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectFilter } from 'redux/filter/filters-selectors';
import { setFilter } from 'redux/filter/filter-slise';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onSetFilter = payload => {
    dispatch(setFilter(payload));
  };
  const onChange = event => {
    onSetFilter(event.target.value);
  };

  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
