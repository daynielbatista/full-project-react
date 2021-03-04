import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import HolaMundo /*, { AdiosMundo }*/ from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar'; 
import Passing from './components/Passing';
import SaludarFn from './components/SaludarFn';

function App() {
  const user1 = {
    name1: "Dayo",
    age1: 35,
    nationality: "Cubano",
  };


  const alertar = () => {
    alert("Hola " + user1.name1);
  }; /*Video 16*/

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <HolaMundo />
      <AdiosMundo />
      <Saludar name='Meera' age="39" />
      <Saludar name='Dany' age="35" />
      <Passing userInfo={user1} />
      <SaludarFn alertar={alertar} />
    </div>
  );
}

export default App;
