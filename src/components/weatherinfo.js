import React from "react";
import { getName } from 'country-list';

function Weatherinfo({ weatherData, forecastData }) {

    
    const sunriseDate = new Date((weatherData.sys.sunrise + weatherData.timezone) * 1000);
    const sunsetDate = new Date((weatherData.sys.sunset + weatherData.timezone) * 1000);
    const temperature = Math.round(weatherData.main.temp);
    const feelsLike = Math.round(weatherData.main.feels_like);
    // Format the sunrise and sunset times as strings (in hours and minutes only)
    const sunriseString = sunriseDate.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
    const sunsetString = sunsetDate.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
  

    const countryCode = weatherData.sys.country;

    // Convert the country code to a country name
    const countryName = getName(countryCode);

    const dateOptions = { weekday: "short" };
    

    const getWeatherIcon = (weatherId) => {
        if (weatherId >= 200 && weatherId <= 232) {
          return <svg xmlns="http://www.w3.org/2000/svg" fill="#313131" viewBox="0 0 512 512"><path d="M0 224c0 53 43 96 96 96h47.2L290 202.5c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 12.8 58.8L333.7 320H352h64c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm330.1 3.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7h70.1L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7H281.9l52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z"/></svg>;
        } else if (weatherId >= 300 && weatherId <= 321) {
          return <svg xmlns="http://www.w3.org/2000/svg" fill="#313131" viewBox="0 0 512 512"><path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3z"/></svg>;
        } else if (weatherId >= 500 && weatherId <= 531) {
          return <svg xmlns="http://www.w3.org/2000/svg" fill="#313131" viewBox="0 0 512 512"><path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3z"/></svg>;
        } else if (weatherId >= 600 && weatherId <= 622) {
          return <svg xmlns="http://www.w3.org/2000/svg" fill="#313131" viewBox="0 0 448 512"><path d="M224 0c13.3 0 24 10.7 24 24V70.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-57 57v76.5l66.2-38.2 20.9-77.8c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4L373 142.2l37.1-21.4c11.5-6.6 26.2-2.7 32.8 8.8s2.7 26.2-8.8 32.8L397 183.8l31.5 8.4c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-77.8-20.9L272 256l66.2 38.2 77.8-20.9c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4L397 328.2l37.1 21.4c11.5 6.6 15.4 21.3 8.8 32.8s-21.3 15.4-32.8 8.8L373 369.8l8.4 31.5c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-20.9-77.8L248 297.6v76.5l57 57c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V441.9l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V297.6l-66.2 38.2-20.9 77.8c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4L75 369.8 37.9 391.2c-11.5 6.6-26.2 2.7-32.8-8.8s-2.7-26.2 8.8-32.8L51 328.2l-31.5-8.4c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l77.8 20.9L176 256l-66.2-38.2L31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4L51 183.8 13.9 162.4c-11.5-6.6-15.4-21.3-8.8-32.8s21.3-15.4 32.8-8.8L75 142.2l-8.4-31.5c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l20.9 77.8L200 214.4V137.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V24c0-13.3 10.7-24 24-24z"/></svg>;
        } else if (weatherId >= 701 && weatherId <= 781) {
          return <svg xmlns="http://www.w3.org/2000/svg" fill="#313131" viewBox="0 0 640 512"><path d="M32 144c0 79.5 64.5 144 144 144H299.3c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32H496c61.9 0 112-50.1 112-112s-50.1-112-112-112c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.6 0-62.4 12.2-85.1 32.3C242.1 12.1 210.5 0 176 0C96.5 0 32 64.5 32 144zM616 368H280c-13.3 0-24 10.7-24 24s10.7 24 24 24H616c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-64 96H440c-13.3 0-24 10.7-24 24s10.7 24 24 24H552c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-192 0H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24zM224 392c0-13.3-10.7-24-24-24H96c-13.3 0-24 10.7-24 24s10.7 24 24 24H200c13.3 0 24-10.7 24-24z"/></svg>;
        } else if (weatherId === 800) {
          return <svg xmlns="http://www.w3.org/2000/svg" fill="#313131" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>;
        } else if (weatherId >= 801 && weatherId <= 804) {
          return <svg xmlns="http://www.w3.org/2000/svg" fill="#313131" viewBox="0 0 640 512"><path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg>;
        } else {
          return <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512"><path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg>;
        }
      };
    

  return (
    <div className="h-[90vh] flex flex-col justify-between">
        <div className="flex flex-col ml-5 md:ml-0 md:items-center">
            <h1 className=" text-4xl md:text-9xl font-extrabold uppercase">{weatherData.name}</h1>
            <h2 className="text-lg font-thin uppercase">{countryName}</h2>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-evenly  ml-5 md:ml-0 ">
            <div className="grid gap-2 grid-cols-2  md:mt-0">
                <div className="col-span-2">
                    <p className="font-bold text-2xl">FEELS LIKE</p>
                    <p className="font-light c">{feelsLike}°</p>
                </div>
                <div>
                    <p className="font-bold text-2xl">SUNRISE</p>
                    <div className="flex flex-row items-center space-x-1"><p className="font-light text-xl">{sunriseString}</p><div className="w-4 h-4"><svg viewBox="0 0 18 16" fill="#313131" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 14.5H15.3438L16.25 13.125C16.5 12.7812 16.5312 12.3125 16.375 11.9375C16.2188 11.5625 15.875 11.25 15.4688 11.1875L13.25 10.7188L12.8125 8.5C12.7188 8.09375 12.4375 7.75 12.0312 7.59375C11.6562 7.4375 11.2188 7.46875 10.875 7.71875L8.96875 8.9375L7.09375 7.71875C6.40625 7.25 5.34375 7.6875 5.15625 8.5L4.71875 10.7188L2.5 11.1562C2.09375 11.25 1.75 11.5312 1.59375 11.9375C1.4375 12.3125 1.46875 12.75 1.71875 13.0938L2.625 14.5H0.5C0.21875 14.5 0 14.75 0 15V15.5C0 15.7812 0.21875 16 0.5 16H17.5C17.75 16 18 15.7812 18 15.5V15C18 14.75 17.75 14.5 17.5 14.5ZM7.3125 14.5C7.46875 14.0312 7.8125 13.5938 8.3125 13.4062C9.21875 13.0312 10.25 13.4688 10.625 14.3438C10.625 14.4062 10.6562 14.4688 10.6562 14.5H7.3125ZM13.5625 14.5H12.1875C12.1562 14.25 12.0938 14 12 13.7812C11.3125 12.125 9.40625 11.3125 7.75 12C6.65625 12.4688 5.96875 13.4375 5.78125 14.5H4.4375L3.15625 12.5625L6 12L6.5625 9.15625L9 10.75L11.4062 9.15625L12 12L14.8125 12.5938L13.5625 14.5ZM5.9375 4.25C6.125 4.4375 6.4375 4.4375 6.625 4.25L8.25 2.65625V6C8.25 6.28125 8.46875 6.5 8.75 6.5H9.25C9.5 6.5 9.75 6.28125 9.75 6V2.65625L11.3438 4.25C11.5312 4.4375 11.8438 4.4375 12.0312 4.25L12.4062 3.90625C12.5938 3.6875 12.5938 3.375 12.375 3.1875L9.34375 0.15625C9.15625 -0.03125 8.8125 -0.03125 8.625 0.15625L5.59375 3.1875C5.375 3.375 5.375 3.6875 5.5625 3.90625L5.9375 4.25Z" ></path></svg></div></div>
                </div>
                <div>
                    <p className="font-bold text-2xl">SUNSET</p>
                    <div className="flex flex-row items-center space-x-1"><p className="font-light text-xl">{sunsetString}</p><div className="w-4 h-4"><svg viewBox="0 0 18 16" fill="#313131" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 14.5H15.3438L16.25 13.125C16.5 12.7812 16.5312 12.3125 16.375 11.9375C16.2188 11.5625 15.875 11.25 15.4688 11.1875L13.25 10.7188L12.8125 8.5C12.7188 8.09375 12.4375 7.75 12.0312 7.59375C11.6562 7.4375 11.2188 7.46875 10.875 7.71875L8.96875 8.9375L7.09375 7.71875C6.40625 7.25 5.34375 7.6875 5.15625 8.5L4.71875 10.7188L2.5 11.1562C2.09375 11.25 1.75 11.5312 1.59375 11.9375C1.4375 12.3125 1.46875 12.75 1.71875 13.0938L2.625 14.5H0.5C0.21875 14.5 0 14.75 0 15V15.5C0 15.7812 0.21875 16 0.5 16H17.5C17.75 16 18 15.7812 18 15.5V15C18 14.75 17.75 14.5 17.5 14.5ZM7.3125 14.5C7.46875 14.0312 7.8125 13.5938 8.3125 13.4062C9.21875 13.0312 10.25 13.4688 10.625 14.3438C10.625 14.4062 10.6562 14.4688 10.6562 14.5H7.3125ZM13.5625 14.5H12.1875C12.1562 14.25 12.0938 14 12 13.7812C11.3125 12.125 9.40625 11.3125 7.75 12C6.65625 12.4688 5.96875 13.4375 5.78125 14.5H4.4375L3.15625 12.5625L6 12L6.5625 9.15625L9 10.75L11.4062 9.15625L12 12L14.8125 12.5938L13.5625 14.5ZM8.625 6.375C8.8125 6.5625 9.15625 6.5625 9.34375 6.375L12.375 3.34375C12.5938 3.15625 12.5938 2.8125 12.4062 2.625L12.0312 2.28125C11.8438 2.09375 11.5312 2.09375 11.3438 2.28125L9.75 3.875V0.5C9.75 0.25 9.5 0 9.25 0H8.75C8.46875 0 8.25 0.25 8.25 0.5V3.875L6.625 2.28125C6.4375 2.09375 6.125 2.09375 5.9375 2.28125L5.59375 2.625C5.375 2.84375 5.375 3.15625 5.59375 3.34375L8.625 6.375Z" ></path></svg></div></div>
                </div>
            </div>
            <div className="flex flex-row md:justify-center order-first md:order-none">
                <h2 className="font-extrabold text-9xl">{temperature}°</h2>
            </div>
            <div className="grid gap-2 grid-cols-2 md:mt-0">
                <div className="col-span-2">
                    <p className="font-bold text-2xl">WEATHER</p>
                    <div className="flex flex-row items-center space-x-1"><p className="font-light text-xl">{weatherData.weather[0].description}</p><div className="w-3 h-3">{getWeatherIcon(weatherData.weather[0].id)}</div></div>
                </div>
                <div>
                    <p className="font-bold text-2xl">WIND</p>
                    <p className="font-light text-xl">{weatherData.wind.speed} m/s</p>
                </div>
                <div>
                    <p className="font-bold text-2xl">HUMIDITY</p>
                    <p className="font-light text-xl">{weatherData.main.humidity}%</p>
                </div>
            </div>
        </div>
        <div className="mb-5 flex flex-col md:items-center">
        <h3 className="text-2xl md:ml-0 ml-5 mb-2 md:mb-5 font-bold">FORECAST</h3>
        <div className="w-full flex justify-evenly flex-row ">    
        {Object.keys(forecastData).map((date) => {
          const forecast = forecastData[date];
          return (
            <div key={date}>
                <div className="grid gap-2 grid-cols-2 justify-center justify-items-center" >
                    
                    <div className="col-span-2"><p className="md:text-2xl">{new Date(forecast.dt_txt).toLocaleDateString("en-US", dateOptions)}</p></div>
                    <div className="col-span-2 flex flex-row items-center space-x-2"><p className="md:text-xl">{Math.round(forecast.main.temp)}°</p> <div className="h-3 w-3 md:h-6 md:w-6">{getWeatherIcon(forecast.weather[0].id)}</div></div>

                </div>

            </div>
          );
        })}
                     
        </div>
        </div>
    </div>
  );
}

export default Weatherinfo;
