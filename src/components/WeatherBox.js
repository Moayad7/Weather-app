import React, { useState } from 'react';
import DateStr from './DateStr';
import Search from './Search';
import WeatherInfo from './WeatherInfo';


function WeatherBox () {
   
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    return (
        <div className='bg-gradient-to-br from-indigo-500 to-purple-900 text-indigo-50  rounded-3xl lg:min-w-[20%] md:min-w-[40%] sm:min-w-[60%] min-h-[50%]'>
            <DateStr/>
            <Search setQuery={setQuery} setWeather={setWeather} query={query}/>
            <WeatherInfo  weather={weather}/>
        </div>
    );
    
}
 
export default WeatherBox;