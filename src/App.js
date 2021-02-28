import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import HolaMundo /*, { AdiosMundo }*/ from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <HolaMundo />
      <AdiosMundo />
    </div>
  );
}

export default App;
