import { MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setPageSize } from '../../../redux/slices/paginationSlice';
import { SelectBox, StyledSelect } from './style';
import Text from '../../TextComponent/TextComponent';

const FilterSelect = () => {
  const pageSize = useSelector((state: RootState) => state.pagination.pageSize);

  const dispatch = useDispatch();

  return (
    <SelectBox>
      <Text text="Display" />
      <StyledSelect
        value={pageSize}
        label="display"
        onChange={(e) => dispatch(setPageSize(e.target.value))}
      >
        <MenuItem value={5}>5 per page</MenuItem>
        <MenuItem value={10}>10 per page</MenuItem>
        <MenuItem value={20}>20 per page</MenuItem>
      </StyledSelect>
    </SelectBox>
  );
};
export default FilterSelect;
