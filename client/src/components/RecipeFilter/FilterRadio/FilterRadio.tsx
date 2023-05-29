import { CardActions, RadioGroup } from '@mui/material';
import Text from '../../TextComponent';
import {
  RadioItem,
  FilterRadioBox,
  ColoredRadio,
  RadioCardActions,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipeDiet } from '../../../redux/slices/recipeDietSlice';
import { RootState } from '../../../redux/store';
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const FilterRadio = () => {
  const dispatch = useDispatch();
  const recipeDiet = useSelector((state: RootState) => state.recipeDiet.value);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(recipeDiet);

  const handleRadioChange = (event: any) => {
    const value = event.target.value;
    setSelectedValue(value);
    dispatch(setRecipeDiet(value));
  };

  return (
    <FilterRadioBox>
      <RadioCardActions onClick={() => setOpen(!open)}>
        <Text text="Dietary options" color="white" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </RadioCardActions>
      {open ? (
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedValue}
          onChange={handleRadioChange}
        >
          <RadioItem value="Any" control={<ColoredRadio />} label="Any" />
          <RadioItem value="Meat" control={<ColoredRadio />} label="Meat" />
          <RadioItem
            value="Vegetarian"
            control={<ColoredRadio />}
            label="Vegetarian"
          />
          <RadioItem value="Vegan" control={<ColoredRadio />} label="Vegan" />
          <RadioItem
            value="Gluten-free"
            control={<ColoredRadio />}
            label="Gluten-free"
          />
          <RadioItem value="Keto" control={<ColoredRadio />} label="Keto" />
          <RadioItem value="Paleo" control={<ColoredRadio />} label="Paleo" />
          <RadioItem
            value="Low-carb"
            control={<ColoredRadio />}
            label="Low-carb"
          />
          <RadioItem
            value="Low-fat"
            control={<ColoredRadio />}
            label="Low-fat"
          />
        </RadioGroup>
      ) : (
        ''
      )}
    </FilterRadioBox>
  );
};

export default FilterRadio;
