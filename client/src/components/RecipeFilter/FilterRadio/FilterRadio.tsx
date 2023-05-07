import { RadioGroup } from '@mui/material';
import Text from '../../TextComponent';
import { RadioItem, FilterRadioBox, ColoredRadio } from './style';

const FilterRadio = () => {
  return (
    <FilterRadioBox>
      <Text text="Show" color="white" />
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="all">
        <RadioItem value="all" control={<ColoredRadio />} label="All" />
        <RadioItem value="meat" control={<ColoredRadio />} label="Meat" />
        <RadioItem value="vegetarian" control={<ColoredRadio />} label="Vegetarian" />
        <RadioItem value="vegan" control={<ColoredRadio />} label="Vegan" />
      </RadioGroup>
    </FilterRadioBox>
  );
};
export default FilterRadio;