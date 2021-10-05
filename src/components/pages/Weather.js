import { useRef, useState, useEffect, useContext } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";
import useHttp from "../hook/use-Http";
import ErrorModal from "../UI/ErrorModal";
import Cart from "../cart/Cart";

const apiKey = "38fb68262a1dad15193eb72bff90089d";

const Weather = () => {
  const { isLoading, error, weather, fetchHandler, clear } = useHttp();
  const [cartIsShown, setCartIsShown] = useState(false);

  const cityNameInputRef = useRef();

  const cityInputHandler = () => {
    const enteredCityName = cityNameInputRef.current.value;

    fetchHandler(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredCityName}&appid=${apiKey}`
    );

    console.log("render");

    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Cart weather={weather} onHideCart={hideCartHandler} />}
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <h2>Weather</h2>
      <input placeholder="City name" ref={cityNameInputRef} />
      {isLoading && <LoadingIndicator />}
      <button onClick={cityInputHandler}>Check Weather</button>
    </div>
  );
};

export default Weather;
