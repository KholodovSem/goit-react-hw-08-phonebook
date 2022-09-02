import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../store/filter-action';

function Filter() {
  const filter = useSelector(({ filter }) => filter)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.currentTarget.value;

    dispatch(changeFilter(value))
  };

  return (
    <div>
      <p className={style.text}>Find contacts by name</p>
      <input
        className={style.input}
        onChange={handleChange}
        type='text'
        value={filter}
        name='filter'
      />
    </div>
  );
}

export default Filter;

