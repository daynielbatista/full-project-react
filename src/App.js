import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import HolaMundo /*, { AdiosMundo }*/ from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar'; 
import Passing from './components/Passing';
import SaludarFN from './components/SaludarFN';

function App() {
  const user1 = {
    name1: "Day",
    age1: 35,
    nationality: "Cubano"
  };

  const saludate = () => {}; /*Video 16*/

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <HolaMundo />
      <AdiosMundo />
      <Saludar name='Meera' age="39" />
      <Saludar name='Dany' age="35" />
      <Passing userInfo={user1} />
      <SaludarFN />
    </div>
  );
}

export default App;
