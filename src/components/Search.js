import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';

const api={
    key: "3ce3d0be92a24a9b1fedb1bbcdcbcc52",
    url: "https://api.openweathermap.org/data/2.5/"
}

function Search ({props,setQuery,setWeather,query}){

    

    
    function getResult(e) {
       
        if (e.key == "Enter"){
            e.preventDefault()

          fetch(`${api.url}weather?q=${query}&unit=metric&APPID=${api.key}`)
            .then(weather => {
              return weather.json();
            }).then(function setResults(data){
                setWeather(data);
                setQuery('');
                console.log(data)
            });
        }
    }

    return (
        <div className='mx-2 px-5 py-3'>
            <form>
                <input id='text' type={'string'} className="w-full rounded-lg p-1 text-gray-800 outline-0 my-2" placeholder='Enter your location' value={query}  onKeyDown={getResult}  onChange={e => setQuery(e.target.value)}></input>
            </form>
        </div>
    );
}
 
export default Search;