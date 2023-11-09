import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons/Pokemons';
import DetailPokemon from './pages/DetailPokemon/DetailPokemon';
import Registretion from './pages/Register/Registration';
import Login from './pages/Login/Login';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<DetailPokemon />} />
        <Route path="/registration" element={<Registretion />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
