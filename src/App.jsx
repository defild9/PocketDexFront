import './App.css';
import { Routes, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Pokemons from './pages/Pokemons/Pokemons';
import DetailPokemon from './pages/DetailPokemon/DetailPokemon';
import Registretion from './pages/Register/Registration';
import Login from './pages/Login/Login';
import PrivateRoute from './components/PrivateRoute';
import Account from './pages/Account/Account';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Pokemons />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
