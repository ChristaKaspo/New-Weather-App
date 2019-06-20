import React from 'react';
import axios from 'axios';
import weatherApiKey from './secrets';

class CurrentForecast extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherInfo: undefined,
    };
  }

  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(async position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`
      );
      const weatherInformation = res.data;
      console.log(weatherInformation);
      this.setState({
        weatherInfo: weatherInformation,
      });
    });
  }

  render() {
    const { weatherInfo } = this.state;
    console.log(weatherInfo);
    return (
      <div>
        {!weatherInfo ? null : (
          <div align="center">
            <div>
              <h1>Weather for {weatherInfo.name}</h1>
              <img
                src={`http://openweathermap.org/img/w/${
                  weatherInfo.weather[0].icon
                }.png`}
                alt="icon"
              />
            </div>
            <div>
              <h3>{weatherInfo.weather[0].description}</h3>
            </div>
            <div>
              <h2>{weatherInfo.main.temp}° Farenheit</h2>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CurrentForecast;
