import { useWeather } from '../context/WeatherContext';

function Header() {

    const { selected, setSelects, citiesJSON } = useWeather()

    const selectCity = (e) => {
        var result = citiesJSON.filter(item => item.name === e.target.value)
        setSelects(result[0])
    };

  return (
    <div>
        <h1 id="weatherForecast">Weather Forecast</h1>
        <h1 id="cityName">{selected.name}</h1>
        <select value={selected.name} onChange={selectCity} id="dropdownMenu">
            {
                citiesJSON.map((item, index) => (
                    <option key={index} value={item.name}>{item.name}</option>
                ))
            }
            
        </select>
    </div>
  )
}

export default Header