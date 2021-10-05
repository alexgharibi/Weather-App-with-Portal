import { useRef, useState, useEffect, useContext } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";
import useHttp from "../hook/use-Http";
import ErrorModal from "../UI/ErrorModal";

const apiKey = "38fb68262a1dad15193eb72bff90089d";

const Weather = () => {
  const { isLoading, error, weather, fetchHandler, clear } = useHttp();
  const [tempreture, setTempreture] = useState(null);

  const cityNameInputRef = useRef();

  const cityInputHandler = () => {
    const enteredCityName = cityNameInputRef.current.value;

    fetchHandler(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredCityName}&appid=${apiKey}`
    );
  };

  const celsiusHandler = (weather) => {
    let cel = weather - 273.15;
    cel = cel.toFixed(2);
    setTempreture(cel);
  };

  const fahrenheitHandler = (weather) => {
    let far = (weather * 9) / 5 - 459.67;
    far = far.toFixed(2);
    setTempreture(far);
  };

  const kelvinHandler = (weather) => {
    setTempreture(weather);
  };

  return (
    <div>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <h2>Weather</h2>
      <input placeholder="City name" ref={cityNameInputRef} />
      {isLoading && <LoadingIndicator />}
      <button onClick={cityInputHandler}>Check Weather</button>
      <button onClick={celsiusHandler}>celsius</button>
      <button onClick={fahrenheitHandler}>faren</button>
      <button onClick={kelvinHandler}>kev</button>
      {!tempreture && <p>The current weather is: {weather && weather}</p>}
      {tempreture && <p>The current weather is: {tempreture}</p>}
    </div>
  );
};

export default Weather;
