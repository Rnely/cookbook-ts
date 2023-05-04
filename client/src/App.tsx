import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Create from './pages/Create';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import RecipeDetails from './pages/RecipeDetails';
import Auth from './pages/AuthPage/Auth';
import UserDetails from './pages/UserDetails';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
              <Route path="/recipe/:id" element={<RecipeDetails />} />
              <Route path="/authentication" element={<Auth />} />
              <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
