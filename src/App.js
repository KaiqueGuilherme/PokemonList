import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import NavBar from './Components/NavBar';
import PokemonCard from './Components/PokemonCard';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
