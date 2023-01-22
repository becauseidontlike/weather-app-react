import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import Footer from "./Footer";

function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  const [loaded, setLoaded] = useState("");

 let form = (
    <form onSubmit={handleQuery}>
      <input type="search" placeholder="City..." onChange={updateCity}></input>
      <input type="submit" value="Search" className="btn btn-outline-secondary"></input>
      <input type="submit" value="Current" className="btn btn-outline-secondary"></input>
    </form>
  );

  function handleQuery(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c8161756616103589832909859e4f86&units=metric`;
    axios.get(url).then(showWeather);
  }

   function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setLoaded(true);
    setTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

return (
<div className="App">
    <div className="container">
       <div className="row align-items-start">
          <div className="col-3">
            <h1 className="myCity">{city}</h1>
          </div>
          <div className="col-9">
             <div>{form}</div>
           </div>
        </div>
      <br />
    <div className="row align-items-start">
      <div className="col-8 bold">
        <div>
          <div className="today">
            THURSDAY</div>LAST UPDATED: <span className="time"> 14:<span className="min">00</span></span><br /><span
            className="current">CURRENT
            WEATHER: {description}</span>
          <br />
        </div>
      </div>
      <div className="col-4">
        <div className="addition">HUMIDITY: <span className="humid">{humidity}</span>% <br />WIND: <span className="speed">{wind}</span>
          m/s</div><br />
      </div>
    </div>

    <div className="row align-items-start">
      <div className="col-2">
         <img src={icon} alt={description} alt="weather" id="icon" />
        </div>
      <div className="col-4">
        <h2><span className="units"><span className="actualTemp" id="celsius">{Math.round(temp)}</span><a href="https://www.shecodes.io" id="celsiusT"
              className="active active2">℃</a> |
            <a href="https://www.shecodes.io" id="fahrenheitT" className="active2">℉</a></span>
        </h2>
      </div>
    </div>
  </div>
<Footer />
</div>
  );
}


export default App;
