import React from "react";
import Search from "./search"


function Weatherinfo() {

  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center ">
        <div className="container flex flex-col items-center">
        <Search />
        <div className="flex flex-col items-center">
            <h1 className="text-9xl font-extrabold">COPENHAGEN</h1>
            <h2 className="text-lg font-thin">DENMARK</h2>
        </div>
        <div className="grid grid-cols-3">
            <div className="grid grid-cols-2">
                <div className="col-span-2">
                    <p>FEELS LIKE</p>
                    <p>20*</p>
                </div>
                <div>
                    <p>SUNSET</p>
                    <p>06:30</p>
                </div>
                <div>
                    <p>SUNRISE</p>
                    <p>21:30</p>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <h2>29*</h2>
                <h2>Ø</h2>
            </div>
            <div className="grid grid-cols-2">
                <div className="col-span-2">
                    <p>WEATHER</p>
                    <p>SUNNY</p>
                </div>
                <div>
                    <p>WIND</p>
                    <p>11 m/s</p>
                </div>
                <div>
                    <p>HUMIDITY</p>
                    <p>20%</p>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-evenly flex-row bottom-10 absolute">
            <span className="h-20 w-px bg-black"></span>
            <div className="grid grid-cols-2">
                
                <div className="col-span-2"><p>DAY</p></div>
                <div><p>TEMP</p></div>
                <div><p>ICON</p></div>

            </div>
            <span className="h-20 w-px bg-black"></span>
            <div className="grid grid-cols-2">
                
                <div className="col-span-2"><p>DAY</p></div>
                <div><p>TEMP</p></div>
                <div><p>ICON</p></div>

            </div>
            <span className="h-20 w-px bg-black"></span>
            <div className="grid grid-cols-2">
                
                <div className="col-span-2"><p>DAY</p></div>
                <div><p>TEMP</p></div>
                <div><p>ICON</p></div>

            </div>
            <span className="h-20 w-px bg-black"></span>
            <div className="grid grid-cols-2">
                
                <div className="col-span-2"><p>DAY</p></div>
                <div><p>TEMP</p></div>
                <div><p>ICON</p></div>

            </div>
            <span className="h-20 w-px bg-black"></span>
            <div className="grid grid-cols-2">
                
            <div className="col-span-2"><p>DAY</p></div>
                <div><p>TEMP</p></div>
                <div><p>ICON</p></div>

            </div>
            <span className="h-20 w-px bg-black"></span>
        </div>
        </div>
    </div>
  );
}

export default Weatherinfo;
