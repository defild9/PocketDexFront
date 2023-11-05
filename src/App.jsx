import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons/Pokemons';
import DetailPokemon from './pages/DetailPokemon/DetailPokemon';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<DetailPokemon />} />
      </Routes>
    </Layout>
  );
}

export default App;
