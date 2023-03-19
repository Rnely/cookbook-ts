import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  _id: string;
  name: String;
}

const RecipeDetails: React.FC = () => {
  const [user, setUser] = useState<User[] | null>(null);

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:5000/cookbook/users/${id}`,
    );
    setUser([response.data]);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details">
      {user.map((user) => {
        return (
          <article key={user._id}>
            <h2>{user.name}</h2>
          </article>
        );
      })}
    </div>
  );
};

export default RecipeDetails;
