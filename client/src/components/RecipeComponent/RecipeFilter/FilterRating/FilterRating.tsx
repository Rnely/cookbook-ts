import { Rating } from '@mui/material';
import { FilterRatingBox, RowBox, StyledCardActions } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterRating } from '../../../../redux/slices/filterRatingSlice';
import { RootState } from '../../../../redux/store';
import Text from '../../../TextComponent';
import { Close } from '@mui/icons-material';

const FilterRating = () => {
  const dispatch = useDispatch();
  const filterRating = useSelector(
    (state: RootState) => state.filterRating.value,
  );

  return (
    <FilterRatingBox>
      <Text text="Rating" />
      <RowBox>
        <Rating
          value={filterRating}
          precision={0.5}
          size="large"
          onChange={(event, newValue) => dispatch(setFilterRating(newValue))}
        />
        <StyledCardActions onClick={() => dispatch(setFilterRating(0))}>
          <Close />
        </StyledCardActions>
      </RowBox>
    </FilterRatingBox>
  );
};
export default FilterRating;
