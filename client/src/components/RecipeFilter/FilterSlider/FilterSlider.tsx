import Text from '../../TextComponent';
import { Slider } from '@mui/material';
import { FilterZoomBox } from './style';

export const FilterSlider = () => {
  return (
    <FilterZoomBox>
      <Text text="Zoom Scale" color="white" />
      <Slider defaultValue={3} step={1} marks min={1} max={5} />
    </FilterZoomBox>
  );
};

export default FilterSlider;