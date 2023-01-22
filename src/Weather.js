import React from "react";
import axios from 'axios';
import { Bars } from  'react-loader-spinner';

export default function Weather(props) {

    function handleresponse(response){
        alert(`the weather in ${response.data.name} is ${response.data.main.temp}℃`);
    }
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=6c8161756616103589832909859e4f86&units=metric`;
    axios.get(apiUrl).then(handleresponse);
    
    return(
    <Bars
  height="100"
  width="120"
  color="pink"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
);
}