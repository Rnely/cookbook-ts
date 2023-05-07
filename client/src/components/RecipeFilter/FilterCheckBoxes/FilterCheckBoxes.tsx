import { CheckBoxItem, ColoredCheckBox } from './style';

const FilterCheckBoxes = () => {
  return (
    <>
      <CheckBoxItem control={<ColoredCheckBox />} label="Spicy" labelPlacement="start" />
      <CheckBoxItem control={<ColoredCheckBox />} label="Non spicy" labelPlacement="start" />
    </>
  );
};
export default FilterCheckBoxes;