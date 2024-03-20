import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Buy products with affordable price and explore more.
        </p>
        <a
          className="App-link"
          href="src/register.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          register
        </a>
       
      </header>
    </div>
  );
}

export default App;
