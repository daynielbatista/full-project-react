import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import HolaMundo /*, { AdiosMundo }*/ from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar'; 

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <HolaMundo />
      <AdiosMundo />
      <Saludar name='Meera' age="39" />
      <Saludar name='Dany' age="35" />
    </div>
  );
}

export default App;
