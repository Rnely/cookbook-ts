import { useDispatch, useSelector } from 'react-redux';
import { FilterSearchBox } from './style';
import { RootState } from '../../../../redux/store';
import { setQuery } from '../../../../redux/slices/recipeQuerySlice';
import { TextField } from '@mui/material';

const FilterSearch = () => {
  const query = useSelector((state: RootState) => state.query.query);
  const dispatch = useDispatch();

  return (
    <FilterSearchBox>
      <TextField
        variant="standard"
        label="Recipe title"
        type="text"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
    </FilterSearchBox>
  );
};
export default FilterSearch;
