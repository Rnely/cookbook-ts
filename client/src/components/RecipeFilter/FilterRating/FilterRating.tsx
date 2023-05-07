import { Rating } from '@mui/material';
import { FilterRatingBox } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterRating } from '../../../redux/slices/filterRatingSlice';
import { RootState } from '../../../redux/store';
import Text from '../../TextComponent/TextComponent';

const FilterRating = () => {
  const dispatch = useDispatch();
  const filterRating = useSelector(
    (state: RootState) => state.filterRating.value,
  );

  return (
    <FilterRatingBox>
      <Text text="Rating" />
      <Rating
        value={filterRating}
        precision={0.5}
        size="large"
        onChange={(event, newValue) => dispatch(setFilterRating(newValue))}
      />
    </FilterRatingBox>
  );
};
export default FilterRating;
