import './App.css';
import { Routes, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons/Pokemons';
import DetailPokemon from './pages/DetailPokemon/DetailPokemon';
import Registretion from './pages/Register/Registration';
import Login from './pages/Login/Login';
import PrivateRoute from './components/PrivateRoute';
import Account from './pages/Account/Account';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<DetailPokemon />} />
        <Route path="/registration" element={<Registretion />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/account"
          element={(
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          )}
        />
      </Routes>
    </Layout>
  );
}

export default App;
