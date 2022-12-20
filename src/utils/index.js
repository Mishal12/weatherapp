/* eslint-disable no-unused-vars */
const api = {
  key: "c35e60a000930a63035f1a1cb777a910",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const getWeather = async (query) => {
  try {
    const response = await fetch(
      `${api.base}weather?q=${query}&units=metric&appid=${api.key}`
    );

    const data = await response.json();
    console.log("fromapi", data);
    if (data.error) {
      return;
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
