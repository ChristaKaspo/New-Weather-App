import React from 'react';
import Button from '@material-ui/core/Button';
import CurrentWeather from './CurrentWeather';
import Home from './Home';
import FiveDayForecast from './FiveDayForecast';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Button>
            <Link to="/current-weather">Current Weather</Link>
          </Button>
          <Button>
            <Link to="/five-day-forecast">Five Day Forecast</Link>
          </Button>
        </nav>
        <main>
          <div>
            <Route path="/" component={Home} />
            <Route exact path="/current-weather" component={CurrentWeather} />
            <Route
              exact
              path="/five-day-forecast"
              component={FiveDayForecast}
            />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
