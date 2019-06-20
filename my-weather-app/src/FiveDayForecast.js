import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import weatherApiKey from './secrets';

// const dummyData = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];

class FiveDayForecast extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherForecast: undefined,
      weatherForecastDay: undefined,
    };
  }

  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(async position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`
      );
      const weatherForecastInfo = res.data;
      const dayArray = weatherForecastInfo.list;
      const newArray = dayArray.filter((e, i) => i % 8 === 8 - 1);

      this.setState({
        weatherForecast: weatherForecastInfo,
        weatherForecastDay: newArray,
      });
    });
  }

  render() {
    const { weatherForecast, weatherForecastDay } = this.state;
    return (
      <div>
        {!weatherForecast ? null : (
          <div>
            <div align="center">
              <h1>Five day forecast for {weatherForecast.city.name}</h1>
            </div>
            {weatherForecastDay.map(day => (
              <Card align="center" key={day.dt}>
                <div>{day.dt_txt}</div>
                <div>{day.main.temp}</div>
                <div>{day.weather[0].description}</div>
                <img
                  src={`http://openweathermap.org/img/w/${
                    day.weather[0].icon
                  }.png`}
                  alt="icon"
                />
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default FiveDayForecast;
