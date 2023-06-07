import { Button, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {
  FilterButtonBox,
  FilterCard,
  FilterTopBox,
  FilterCloseBox,
} from './style';
import Text from '../TextComponent';
import FilterCheckBoxes from './FilterCheckBoxes';
import FilterRadio from './FilterRadio';
import FilterRating from './FilterRating';
import FilterSearch from './FilterSearch/FilterSearch';

const RecipeFilter = () => {
  const [open, setOpen] = useState(false);

  const handleFilterButton = () => {
    setOpen(!open);
  };

  return (
    <>
      {open ? (
        <FilterCard>
          <FilterTopBox>
            <Text text="Filter" fontWeight={600} />
            <FilterCloseBox>
              <Button onClick={handleFilterButton}>
                <CloseIcon />
              </Button>
            </FilterCloseBox>
          </FilterTopBox>
          <Divider />
          <FilterRating />
          <FilterSearch />
          <FilterCheckBoxes />
          <FilterRadio />
        </FilterCard>
      ) : (
        <FilterButtonBox>
          <Button onClick={handleFilterButton}>
            <MenuIcon />
          </Button>
        </FilterButtonBox>
      )}
    </>
  );
};

export default RecipeFilter;
