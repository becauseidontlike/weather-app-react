import './App.css';
import Footer from "./Footer";

function App() {
  
  return (
<div className="App">
  <div className="container">
        <div className="row align-items-start">
          <div className="col-3">
            <h1 className="myCity">Kraków</h1>
          </div>
          <div className="col-7">
            <form action="" id="form-search">
              <input
                className="form-control"
                type="text"
                placeholder="City"
                aria-label="default input example"
                id="write-in"
              />{" "}
              <button
                type="submit"
                className="btn btn-secondary"
                id="searching-city"
              >
                Search
              </button>
            </form>
          </div>
        </div>
  
    <br />
    <div className="row align-items-start">
      <div className="col-8 bold">
        <div>
          <div className="today">
            THURSDAY</div>LAST UPDATED: <span className="time"> 14:<span className="min">00</span></span><br /><span
            className="current">CURRENT
            WEATHER</span>
          <br />
        </div>
      </div>
      <div className="col-4">
        <div className="addition">HUMIDITY: <span className="humid">60</span>% <br />WIND: <span className="speed">1</span>
          m/s</div><br />
      </div>
    </div>

    <div className="row align-items-start">
      <div className="col-2">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather" id="icon"></img>
      </div>
      <div className="col-4">
        <h2><span className="units"><span className="actualTemp" id="celsius"></span><a href="#" id="celsiusT"
              className="active active2">℃</a> |
            <a href="#" id="fahrenheitT" className="active2">℉</a></span>
        </h2>
      </div>
    </div>
  </div>
<Footer />
</div>

  );
}

export default App;
