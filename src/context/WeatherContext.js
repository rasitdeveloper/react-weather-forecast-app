import { useContext, createContext, useState, useEffect } from 'react';
import citiesJSON from '../data/cities_of_turkey.json';
const axios = require('axios');

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [selected, setSelects] = useState(citiesJSON[57]);


    useEffect(() => {

        axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${selected.latitude}&lon=${selected.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(res => {
            // console.log(days.slice(today.getDay()-1,today.getDay()-1+8))
            // console.log(res.data.daily)
            setData(res.data.daily)
            })
            .catch((e) => console.log("catch data failed"));
        
    }, [selected])

    const value = {
        data,
        setData,
        selected,
        setSelects,
        citiesJSON
    };

    return (
        <WeatherContext.Provider value={value}>
          {children}
        </WeatherContext.Provider>
    );

}

export const useWeather = () => useContext(WeatherContext);