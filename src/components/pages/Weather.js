import { useRef, useState, useEffect } from "react";
import useHttp from "../hook/use-Http";

const apiKey = "38fb68262a1dad15193eb72bff90089d";

const Weather = () => {
  const { isLoading, error, weather, fetchHandler } = useHttp();
  const [tempreture, setTempreture] = useState(null);
  const cityNameInputRef = useRef();

  const cityInputHandler = () => {
    const enteredCityName = cityNameInputRef.current.value;

    fetchHandler(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredCityName}&appid=${apiKey}`
    );
  };

  const celHandler = () => {
    let cel = weather - 273.15;
    cel = cel.toFixed(2);
    setTempreture(cel);
  };

  const farHandler = () => {
    let far = (weather * 9) / 5 - 459.67;
    far = far.toFixed(2);
    setTempreture(far);
  };

  const kevHandler = () => {
    setTempreture(weather);
  };

  return (
    <div>
      <h2>Weather</h2>
      <input placeholder="City name" ref={cityNameInputRef} />
      <button onClick={cityInputHandler}>Check Weather</button>
      <button onClick={celHandler}>celsius</button>
      <button onClick={farHandler}>faren</button>
      <button onClick={kevHandler}>kev</button>
      {!tempreture && <p>The current weather is: {weather && weather}</p>}
      {tempreture && <p>The current weather is: {tempreture}</p>}
    </div>
  );
};

export default Weather;
