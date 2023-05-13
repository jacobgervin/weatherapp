import React, { useState } from "react";

function Search({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  const handleChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  
    // If the input field is empty, reset the suggestions to an empty array
    if (query === "") {
      setSuggestions([]);
      return;
    }
  
    // Make a request to the OpenWeatherMap Geocoding API to get location suggestions
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
        query
      )}&limit=5&appid=55c01dd04aa12c3f115a09b944382137`
    );
    const data = await response.json();
  
    // Extract the location suggestions from the API response and update the state
    const suggestions = data.map((result) => result.name + ", " + result.country);
    setSuggestions(suggestions);
  };
  

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="h-[10vh] w-screen">
      <div className="w-screen h-full flex flex-row md:justify-center ml-5 items-center">
        <form
          className="flex flex-row items-center space-x-1 border-b-2 border-slate-800"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Enter a city name..."
            className="bg-transparent outline-0"
          />
          <button type="submit">
          <svg className="w-5 h-5" fill="#313131" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
          </button>
        </form>
        {suggestions.length > 0 && (
          <ul className="absolute top-16 min-w-44 bg-white rounded-md overflow-hidden z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-3 py-1 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
