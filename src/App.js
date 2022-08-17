import React, { Component,useState } from 'react';
import WeatherBox from './components/WeatherBox';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
import './App.css';



function App(){

    return (
      <div className='h-screen bg-indigo-100  grid place-items-center'>
        <WeatherBox className=''/>
      </div>
    );
  
}
 
export default App;
