
import logo from './logo.svg';
import './App.css';
import Item from './Myitem';
import Practice from './Practice';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item name="David"/>
        <Item name="Cheese"/>
        <Item name="Shiro"/>
        
        <Practice/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
