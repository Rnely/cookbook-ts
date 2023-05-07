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
} from './style';
import Text from '../TextComponent/TextComponent';
import { AddButton, PublishButton } from '../StyledButtons/StyledButtons';

const CreateForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');
  const [time, setTime] = useState('');
  const [listIngredients, setListIngredients] = useState(Array);

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
        <StyledCardActions>
          {isPending && <PublishButton text="Submit" />}
          {!isPending && <PublishButton text="Submit..." />}
        </StyledCardActions>
      </form>
    </CreateCard>
  );
};

export default CreateForm;
