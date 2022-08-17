import React, { Component } from 'react';

function WeatherInfo(props) {


        return (
            <div className='min-h-[100%] duration-900 bold text-center'>
                    {(typeof props.weather.main != "undefined")? (
                        <div className='space-y-2  text-violet-700 duration-900 bg-indigo-300 opacity-90 '>
                            <div className=' px-5 py-4 mb-3 text-4xl '>
                                <h2 className='inline '>{props.weather.name}, {props.weather.sys.country}</h2>
                                <i class="bi bi-geo-alt pl-4 inline text-cyan-600"></i>
                            </div>
                            <div className='flex justify-between bg-indigo-400 py-5 px-5'>
                                
                                <div className=' px-5  space-y-5'>
                                    <h2 className='text-4xl'>{props.weather.weather[0].main}</h2>
                                    <div className=' text-8xl flex justify-between'>
                                        <h2 className='text-yellow-300'>{props.weather.weather[0].description=="clear sky"?<i className="bi bi-brightness-high"></i>:('')}</h2>
                                        <h2 className='text-gray-300'>{props.weather.weather[0].description=="overcast clouds"?<i className="bi bi-clouds"></i>:('')}</h2>
                                        <h2 className='text-gray-300'>{props.weather.weather[0].description=="broken clouds"?<i className="bi bi-clouds"></i>:('')}</h2>
                                        <h2 className='text-gray-300'>{props.weather.weather[0].description=="scattered clouds"?<i className="bi bi-clouds"></i>:('')}</h2>
                                        <h2 className='text-gray-200'>{props.weather.weather[0].description=="few clouds"?<i className="bi bi-cloud-sun"></i>:('')}</h2>
                                        <h2 className='text-blue-600'>{props.weather.weather[0].description=="light rain"?<i className="bi bi-cloud-drizzle"></i>:('')}</h2>
                                        <h2 className='text-blue-600'>{props.weather.weather[0].description=="moderate rain"?<i className="bi bi-cloud-drizzle"></i>:('')}</h2>
                                    </div>
                                </div>
                                <div className='px-5  space-y-5'>
                                    <h2 className='text-4xl '>{Math.round(props.weather.main.temp - 273)? Math.round(props.weather.main.temp - 273):('')} ْC</h2>
                                    <div>
                                        <i class="bi bi-thermometer-half text-8xl  text-red-400"></i>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ): (
                        <div className='space-y-2 text-gray-300 bg-gray-800 duration-700 opacity-20 '>
                            <div className=' px-5 py-4 mb-3 text-4xl'>
                                <h2 className='inline'>Location</h2>
                                <i class="bi bi-geo-alt pl-4 inline"></i>
                            </div>
                            <div className='flex justify-between py-5 px-5 bg-gray-600'>
                                <div className=' px-5 space-y-5'>
                                    <h2 className='text-4xl '>Weather</h2>
                                    <div className=''>
                                        <h2 className='text-8xl '><i class="bi bi-cloud-sun "></i></h2>
                                    </div>
                                </div>
                                <div className='px-5 space-y-5'>
                                    <h2 className=' text-4xl'>Temp</h2>
                                    <div>
                                        <i class="bi bi-thermometer-half  text-8xl "></i>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    )}
            </div>
        );
}
 
export default WeatherInfo;