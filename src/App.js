import React, { useState } from "react";
import Weatherinfo from "./components/weatherinfo";
import Search from "./components/search"
import './App.css';

const API_KEY = "55c01dd04aa12c3f115a09b944382137"; // Replace with your own API key

const groupByDate = (forecastData) => {
  const groupedData = {};
  forecastData.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!groupedData[date] && item.dt_txt.endsWith("12:00:00")) {
      groupedData[date] = item;
    }
  });
  return groupedData;
};


function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
  const handleSubmit = async (searchQuery) => {
    setLoading(true);
    setError(null);
  
    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}&units=metric`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=${API_KEY}&units=metric`
        ),
      ]);
      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();
      setWeatherData(weatherData);
      const groupedForecastData = groupByDate(forecastData.list);
      setForecastData(groupedForecastData);
    } catch (error) {
      setError(`Seems we are unable to find: ${searchQuery}`);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };
  
  
  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <Search onSubmit={handleSubmit} api />
        <p>{error}</p>
      </div>
    );
  }


  console.log(forecastData)


  return (
    <div className="h-screen w-screen main-container overflow-hidden">
      <Search onSubmit={handleSubmit} />
      {weatherData && <Weatherinfo weatherData={weatherData} forecastData={forecastData} />}
    </div>
  );
}

export default App;
