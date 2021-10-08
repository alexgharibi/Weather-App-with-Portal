import { useRef, useState } from "react";
import classes from "./weather.module.css";
import useHttp from "../hook/use-Http";
import ErrorModal from "../UI/ErrorModal";
import Cart from "../cart/Cart";
import { useTranslation } from "react-i18next";

const apiKey = "38fb68262a1dad15193eb72bff90089d";

const Weather = () => {
  const { t } = useTranslation();

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
    clear();
  };

  return (
    <div className={classes.weather}>
      {error && <ErrorModal onClose={hideCartHandler}>{error}</ErrorModal>}
      {!error && cartIsShown && (
        <Cart
          isLoading={isLoading}
          weather={weather}
          icon={icon}
          city={city}
          description={description}
          onHideCart={hideCartHandler}
        />
      )}
      <h1>{t("Weather App")}</h1>
      <div className={classes.box}>
        <div>
          <input
            name="search"
            className={classes.input}
            placeholder="City name"
            autoComplete="hidden"
            spellCheck="false"
            ref={cityNameInputRef}
          />
        </div>
        <div>
          <button
            className={classes.btn}
            onClick={cityInputHandler}
            data-testid="search-button"
          >
            {t("Check Weather")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
