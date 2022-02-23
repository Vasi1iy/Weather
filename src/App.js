import React from 'react';
import Info from './components/Info/info';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
import './App.css';
const API_KEY = 'a3477dac85c52ccaebe5ce315599cdea';

class App extends React.Component {

  state = {
    temp: undefined,
    name: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
  
    if(city) {
      const api_url = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      let sunrise = data.sys.sunrise;
      let date = new Date(sunrise * 1000);
      let sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      let sunset = data.sys.sunset;
      let datee = new Date(sunset * 1000);
      let sunset_date = datee.getHours()+':'+datee.getMinutes()+':'+datee.getSeconds();

      this.setState({
        temp: data.main.temp,
        name: data.name,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: '',
      });
      console.log(data);
    }

    
  }

  render() {
    return(
      <div>
        <Info /> 
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          name={this.state.name}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
         />
      </div>  
      );
  }
}

export default App;