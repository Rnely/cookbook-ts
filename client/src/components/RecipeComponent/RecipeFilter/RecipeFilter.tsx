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
import Text from '../../TextComponent';
import FilterDiet from './FilterDiet';
import FilterRating from './FilterRating';
import FilterSearch from './FilterSearch';
import FilterCookTime from './FilterCookTime';

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
          <FilterDiet />
          <FilterCookTime />
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
