import logo from './logo.svg';
import './App.css';
import Userlist from './Components/UserlistComponent';
import StatefulComponent from './Components/StafefulComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenue sur notre application</p>
        <StatefulComponent nom={"Je suis un nom"} />
        <Userlist />
      </header>
    </div>
  );
}

export default App;
