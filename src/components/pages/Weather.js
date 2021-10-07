import { useRef, useState } from "react";
import classes from "./weather.module.css";
import LoadingIndicator from "../UI/LoadingIndicator";
import useHttp from "../hook/use-Http";
import ErrorModal from "../UI/ErrorModal";
import Cart from "../cart/Cart";

const apiKey = "38fb68262a1dad15193eb72bff90089d";

const Weather = () => {
  const {
    isLoading,
    error,
    icon,
    city,
    description,
    weather,
    fetchHandler,
    clear,
  } = useHttp();
  const [cartIsShown, setCartIsShown] = useState(false);

  const cityNameInputRef = useRef();

  const cityInputHandler = () => {
    const enteredCityName = cityNameInputRef.current.value;

    fetchHandler(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredCityName}&appid=${apiKey}`
    );

    setCartIsShown(true);

    cityNameInputRef.current.value = "";
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className={classes.weather}>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      {!error && cartIsShown && (
        <Cart
          weather={weather}
          icon={icon}
          city={city}
          description={description}
          onHideCart={hideCartHandler}
        />
      )}
      <h1>Weather</h1>
      <div className={classes.box}>
        <input
          className={classes.input}
          placeholder="City name"
          autoComplete="hidden"
          ref={cityNameInputRef}
        />
        {isLoading && <LoadingIndicator />}
        <button className={classes.btn} onClick={cityInputHandler}>
          Check Weather
        </button>
      </div>
    </div>
  );
};

export default Weather;
