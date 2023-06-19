import { RadioGroup } from '@mui/material';
import Text from '../../../TextComponent';
import {
  RadioItem,
  FilterRadioBox,
  ColoredRadio,
  RadioCardActions,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { setCookTime } from '../../../../redux/slices/filterCookTimeSlice';

const FilterDiet = () => {
  const dispatch = useDispatch();
  const cookTime = useSelector((state: RootState) => state.filterCookTime.time);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(cookTime);

  const handleRadioChange = (event: any) => {
    const value = event.target.value;
    setSelectedValue(value);
    dispatch(setCookTime(value));
    console.log(value);
  };

  return (
    <FilterRadioBox>
      <RadioCardActions onClick={() => setOpen(!open)}>
        <Text text="Cooking time" color="white" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </RadioCardActions>
      {open ? (
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedValue}
          onChange={handleRadioChange}
        >
          <RadioItem value="any" control={<ColoredRadio />} label="Any" />
          <RadioItem
            value={10}
            control={<ColoredRadio />}
            label="Under 10 minutes"
          />
          <RadioItem
            value={20}
            control={<ColoredRadio />}
            label="Under 20 minutes"
          />

          <RadioItem
            value={30}
            control={<ColoredRadio />}
            label="Under 30 minutes"
          />

          <RadioItem
            value={60}
            control={<ColoredRadio />}
            label="Under 60 minutes"
          />
          <RadioItem
            value="long"
            control={<ColoredRadio />}
            label="Over 60 minutes"
          />
        </RadioGroup>
      ) : (
        ''
      )}
    </FilterRadioBox>
  );
};

export default FilterDiet;
