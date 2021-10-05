import React, { useState } from "react";

const useHttp = () => {
  const [weather, setWeather] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setWeather(data.main.temp);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return {
    weather,
    isLoading,
    error,
    fetchHandler,
  };
};

export default useHttp;
