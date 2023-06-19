import { RadioGroup } from '@mui/material';
import Text from '../../../TextComponent';
import {
  RadioItem,
  FilterRadioBox,
  ColoredRadio,
  RadioCardActions,
  CenterBox,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  setSortByCookTime,
  setSortByRating,
} from '../../../../redux/slices/filterSortBySlice';

const FilterSort = () => {
  const dispatch = useDispatch();
  const sortByRating = useSelector(
    (state: RootState) => state.filterSortBy.sortByRating,
  );
  const sortByCookTime = useSelector(
    (state: RootState) => state.filterSortBy.sortByCookTime,
  );

  const [open, setOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(sortByRating);
  const [selectedCookTime, setSelectedCookTime] = useState(sortByRating);

  const handleSortByRating = (event: any) => {
    const value = event.target.value;
    setSelectedRating(value);
    dispatch(setSortByRating(value));
  };
  const handleSortByCookTime = (event: any) => {
    const value = event.target.value;
    setSelectedCookTime(value);
    dispatch(setSortByCookTime(value));
  };

  return (
    <FilterRadioBox>
      <RadioCardActions onClick={() => setOpen(!open)}>
        <Text text="Sort recipes by" color="white" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </RadioCardActions>
      {open ? (
        <>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={selectedRating}
            onChange={handleSortByRating}
          >
            <CenterBox>
              <Text text="Rating" color="white" />
            </CenterBox>
            <RadioItem value="any" control={<ColoredRadio />} label="Any" />
            <RadioItem
              value="high"
              control={<ColoredRadio />}
              label="Highest"
            />
            <RadioItem value="low" control={<ColoredRadio />} label="Lowest" />
          </RadioGroup>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={selectedCookTime}
            onChange={handleSortByCookTime}
          >
            <Text text="Cook time" color="white" />
            <RadioItem value="any" control={<ColoredRadio />} label="Any" />
            <RadioItem value="quick" control={<ColoredRadio />} label="Quick" />
            <RadioItem value="long" control={<ColoredRadio />} label="Long" />
          </RadioGroup>
        </>
      ) : (
        ''
      )}
    </FilterRadioBox>
  );
};

export default FilterSort;
