import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { RootState } from '../../redux/store';
import './style.css';
import {
  CreateCard,
  CreateTextField,
  CreateIngTextField,
  StyledCardActions,
  IngBox,
  IngListBox,
  CreateRowBox,
  FilterRadioBox,
  RadioItem,
  CreateFormBox,
} from './style';
import Text from '../TextComponent/TextComponent';
import { AddButton, PublishButton } from '../StyledButtons/StyledButtons';
import { Radio, RadioGroup } from '@mui/material';

const CreateForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');
  const [time, setTime] = useState('');
  const [listIngredients, setListIngredients] = useState(Array);
  const [diet, setDiet] = useState('');

  const isPending = useSelector((state: RootState) => state.pending);
  const user = useSelector(
    (state: RootState) => state.currentUserName.userName,
  );
  const userId = useSelector((state: RootState) => state.currentUserId.userId);

  const nav = useNavigate();

  const handleIngredients = (e: any) => {
    e.preventDefault();
    if (ingredients) {
      setListIngredients([...listIngredients, ingredients]);
      setIngredients('');
    }
  };

  const handleSubmit2 = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/cookbook/recipes', {
        user,
        userId,
        title,
        listIngredients,
        method,
        time,
        diet,
        avgRating: 0,
      });
      nav('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateCard>
      <Text text={'Add a new recipe'} variant="h5" fontWeight={600} my={3} />
      <form onSubmit={handleSubmit2}>
        <CreateRowBox>
          <CreateFormBox>
            <CreateTextField
              className="inp"
              variant="standard"
              label="Recipe title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <IngBox>
              <CreateIngTextField
                type="text"
                variant="standard"
                label="Recipe ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
              <StyledCardActions onClick={handleIngredients}>
                <AddButton text="Add" />
              </StyledCardActions>
            </IngBox>
            <IngListBox>
              <Text
                text={'Current ingredients: ' + listIngredients.join(', ')}
                variant="caption"
                display="flex"
              />
            </IngListBox>
            <CreateTextField
              className="inp"
              variant="standard"
              label="Recipe method"
              required
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            />
            <CreateTextField
              className="inp"
              variant="standard"
              label="Cooking time"
              type="number"
              inputProps={{
                min: '0',
              }}
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </CreateFormBox>

          <>
            <FilterRadioBox>
              <Text text="Dietary Preferences" />
              <RadioGroup
                aria-labelledby="recipe"
                defaultValue=""
                onChange={(e) => setDiet(e.target.value)}
              >
                <RadioItem value="meat" control={<Radio />} label="Meat" />
                <RadioItem
                  value="vegetarian"
                  control={<Radio />}
                  label="Vegetarian"
                />
                <RadioItem value="vegan" control={<Radio />} label="Vegan" />
              </RadioGroup>
            </FilterRadioBox>
          </>
        </CreateRowBox>
        <StyledCardActions>
          {isPending && <PublishButton text="Submit" />}
          {!isPending && <PublishButton text="Submit..." />}
        </StyledCardActions>
      </form>
    </CreateCard>
  );
};

export default CreateForm;
