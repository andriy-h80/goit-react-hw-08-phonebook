import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import { FilterStyled } from './Filter.styled';

const Filter = () => {
  const filtered = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value.toLowerCase().trim()));
  };

  return (
    <FilterStyled>
      <label htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filtered}
        onChange={changeFilter} />
    </FilterStyled>
  );
};

export default Filter;
