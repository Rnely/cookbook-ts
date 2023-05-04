import { RadioGroup } from '@mui/material';
import Text from '../../TextComponent';
import { RadioItem, FilterRadioBox, ColoredRadio } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipeDiet } from '../../../redux/slices/recipeDietSlice';
import { RootState } from '../../../redux/store';

const FilterRadio = () => {
  const dispatch = useDispatch();
  const recipeDiet = useSelector((state: RootState) => state.recipeDiet.value);

  return (
    <FilterRadioBox>
      <Text text="Show" color="white" />
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={recipeDiet}
        onChange={(e) => dispatch(setRecipeDiet(e.target.value))}
      >
        <RadioItem value="all" control={<ColoredRadio />} label="All" />
        <RadioItem value="meat" control={<ColoredRadio />} label="Meat" />
        <RadioItem
          value="vegetarian"
          control={<ColoredRadio />}
          label="Vegetarian"
        />
        <RadioItem value="vegan" control={<ColoredRadio />} label="Vegan" />
      </RadioGroup>
    </FilterRadioBox>
  );
};
export default FilterRadio;
