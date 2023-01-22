import './App.css';
import Weather from './Weather';

function App() {
  let city = "Krakow";
  return (
    <div className="App">
      <header className="App-header">
      <h1>It's me, hi!!!</h1>
      <h2>I'm the problem it's me!!!</h2>
      <Weather city="Warsaw" />
      <a href="https://www.shecodes.io" target="_blank" rel="noreferrer">Link</a> 
      <img src="" alt="" />
      <p>{city}</p>
      </header>
    </div>
  );
}

export default App;
