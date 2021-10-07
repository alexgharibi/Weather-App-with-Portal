export const fahrenheit = (weather) => {
  let far = Math.round((weather * 9) / 5 - 459.67) + "\u00B0F";
  return far;
};

export const celcius = (weather) => {
  let cel = Math.round(weather - 273.15) + "\u00B0C";
  return cel;
};
