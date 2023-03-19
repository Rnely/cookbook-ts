import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Create from './pages/Create';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/recipes/:id" element={<RecipeDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
