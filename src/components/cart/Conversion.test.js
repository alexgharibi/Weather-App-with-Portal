import { celcius, fahrenheit } from "./Conversion";

test("to celcius conversion", () => {
  expect(celcius(0)).toBe(-273 + "\u00B0C");
});

test("to fahrenheit conversion", () => {
  expect(fahrenheit(0)).toBe(-460 + "\u00B0F");
});
