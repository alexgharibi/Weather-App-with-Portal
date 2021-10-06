import { useRef, useState, useEffect, useContext } from "react";
import classes from './weather.module.css'
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

    
    setCartIsShown(true)
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };



  return (
    <div>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      {cartIsShown && (
        <Cart
          weather={weather}
          icon={icon}
          city={city}
          description={description}
          onHideCart={hideCartHandler}
        />
      )}
      <h2>Weather</h2>
      <input className={classes.input} placeholder="City name" ref={cityNameInputRef} />
      {isLoading && <LoadingIndicator />}
      <button onClick={cityInputHandler}>Check Weather</button>
    </div>
  );
};

export default Weather;
