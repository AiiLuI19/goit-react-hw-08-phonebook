import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../redux/contacts/selectors';
import s from './Phonebook.module.css';
import { filterSlice } from '../redux/filter/filterSlice';
const Filter = () => {
  const { filterContact } = filterSlice.actions;
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterContacts = evt => {
    dispatch(filterContact(evt.currentTarget.value.toLowerCase()));
  };

  return (
    <div className={s.wrapFilter}>
      <label htmlFor="filter" className={s.find}>
        Find contacts by name
      </label>
      <input
        id="filter"
        value={filter}
        onChange={filterContacts}
        className={s.input}
      />
    </div>
  );
};

export default Filter;
