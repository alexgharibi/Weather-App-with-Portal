import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const weatherIcon = {
  Thunderstorm: "wi-thunderstorm",
  Drizzle: "wi-sleet",
  Rain: "wi-storm-showers",
  Snow: "wi-snow",
  Atmosphere: "wi-fog",
  Clear: "wi-day-sunny",
  Clouds: "wi-day-fog",
};

const useHttp = () => {
  const [weather, setWeather] = useState(undefined);
  const [icon, setIcon] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory()

  const clear = () => {
    setError(null);
    history.push("/weather")
  };

  const getWeatherIcon = (icons, rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        setIcon(weatherIcon.Thunderstorm);
        break;
      case rangeId >= 300 && rangeId <= 321:
        setIcon(weatherIcon.Drizzle);
        break;
      case rangeId >= 500 && rangeId <= 531:
        setIcon(weatherIcon.Rain);
        break;
      case rangeId >= 600 && rangeId <= 622:
        setIcon(weatherIcon.Snow);
        break;
      case rangeId >= 700 && rangeId <= 781:
        setIcon(weatherIcon.Atmosphere);
        break;
      case (rangeId = 800):
        setIcon(weatherIcon.Clear);
        break;
      case rangeId >= 801 && rangeId <= 804:
        setIcon(weatherIcon.Clouds);
        break;
      default:
        setIcon(weatherIcon.Clouds);
    }
  };

  const fetchHandler = async (url, method, body, headers) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: method ? method : "GET",
        headers: headers ? headers : {},
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      setWeather(Math.round(data.main.temp));
      setCity(data.name);
      setDescription(data.weather[0].description);
      getWeatherIcon(weatherIcon, data.weather[0].id);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return {
    icon,
    description,
    city,
    weather,
    isLoading,
    error,
    fetchHandler,
    clear,
  };
};

export default useHttp;
