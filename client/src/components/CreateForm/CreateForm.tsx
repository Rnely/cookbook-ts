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
  CreateFileInput,
} from './style';
import Text from '../TextComponent/TextComponent';
import { AddButton, PublishButton } from '../StyledButtons/StyledButtons';
import { MenuItem, Select } from '@mui/material';

const CreateForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');
  const [time, setTime] = useState('');
  const [listIngredients, setListIngredients] = useState(Array);
  const [diet, setDiet] = useState('Any');
  const [image, setImage] = useState<File | undefined>(undefined);

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

  const handleImage = (newFile: any) => {
    setImage(newFile);
  };

  const handleSubmit2 = async (e: any) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('user', user);
      formData.append('userId', userId);
      formData.append('title', title);
      formData.append('listIngredients', JSON.stringify(listIngredients));
      formData.append('method', method);
      formData.append('time', time);
      formData.append('diet', diet);
      formData.append('avgRating', '0');
      if (image) {
        formData.append('image', image);
      }

      await axios.post('http://localhost:5000/cookbook/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      nav('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateCard>
      <Text text={'Add a new recipe'} variant="h5" fontWeight={600} my={3} />
      <form onSubmit={handleSubmit2} encType="multipart/form-data">
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
            <CreateFileInput
              value={image}
              onChange={handleImage}
              size="small"
              placeholder="Add a image"
              variant="standard"
              inputProps={{
                accept: 'image/jpeg, image/jpg, image/png',
              }}
            />
          </CreateFormBox>

          <>
            <FilterRadioBox>
              <Text text="Dietary Preferences" />
              <Select value={diet} onChange={(e) => setDiet(e.target.value)}>
                <MenuItem value="Any">Any</MenuItem>
                <MenuItem value="Meat">Meat</MenuItem>
                <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                <MenuItem value="Vegan">Vegan</MenuItem>
                <MenuItem value="Keto">Keto</MenuItem>
                <MenuItem value="Paleo">Paleo</MenuItem>
                <MenuItem value="Low-carb">Low-carb</MenuItem>
                <MenuItem value="Low-fat">Low-fat</MenuItem>
                <MenuItem value="Gluten-free">Gluten-free</MenuItem>
              </Select>
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
