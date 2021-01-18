import '../App.css';
import React from 'react';
import {fetchWeather} from '../actions/index';
import {connect} from 'react-redux';
import {
  Button, 
  Spinner
} from 'reactstrap';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.css';

function WeatherApp(props) {

const heading = {
    position: 'absolute',
    top: '8px',
    left:'16px',
    color: 'royalBlue',
}
const btn_close={
    position: 'absolute',
    bottom: '8px',
    right: '12px',
}
const btn_cross={
  background: 'transparent',
  marginLeft: '90%',
  borderRadius: '50%',
  color: 'red',
  border: 'none',
  fontWeight: 500
}
const dataNotFound = {
  textAlign: 'center',
  fontSize: '20px',
}

    const [state, setState] = React.useState('');
    const [details, setDetails] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [weatherBox, setWeatherBox] = React.useState(true);

    const formHandler = (event) => {
        event.preventDefault();
        if(state === ''){
          setError(true);
        }
        else{
          props.fetchWeather(state);
          setState('');
          setError(false);
          setWeatherBox(true);
        }
    }

    const dateBuilder= (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      
      return `${day}, ${date} ${month} ${year}`;
      }

  return (
    <div className="background">

      <Header 
      formHandler={formHandler}
      state={state}
      setState={setState}
      error={error}
      />

      {(props.weather.loading) ?
        <Spinner style={{margin:'0 50%', width: '3rem', height: '3rem'}} color="info" />
      :
      (props.weather.error) ?
        <div style={dataNotFound}>Data not found.</div>
      :
      (weatherBox && props.weather.data && 
        <div className={(props.weather.data.main.temp > 20 ? 'red' : 'blue')}>
              <Button onClick={() =>setWeatherBox(false)} style={btn_cross}>X</Button>
            <div className="location">
                {props.weather.data.name}, {props.weather.data.sys.country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
              <div className="weather-box">
                <div className="temp">
                  {props.weather.data.main.temp}°C
                </div>
                <b>{props.weather.data.weather[0].main}</b>
                <img src={`http://openweathermap.org/img/wn/${props.weather.data.weather[0].icon}.png`} alt="icon" /><br/>
                {details && <div className="detailBox">
                <h3 style={heading}>Weather Details</h3>
                <div style={{marginBottom:'5px'}}>Feels like: <b>{props.weather.data.main.feels_like}°C</b></div>
                <div style={{marginBottom:'5px'}}>Min-Temp: <b>{props.weather.data.main.temp_min}°C</b></div>
                <div style={{marginBottom:'5px'}}>Max-Temp: <b>{props.weather.data.main.temp_max}°C</b></div>
                <div style={{marginBottom:'5px'}}>Wind: <b>{Math.round(props.weather.data.wind.speed*18)/5} km/hr</b></div>
                <div style={{marginBottom:'5px'}}>Humidity: <b>{props.weather.data.main.humidity}%</b></div>
                <div style={{marginBottom:'5px'}}>Sunrise: <b>{new Date(props.weather.data.sys.sunrise*1000).toLocaleTimeString()}</b></div>
                <div>Sunset: <b>{new Date(props.weather.data.sys.sunset*1000).toLocaleTimeString()}</b></div>
                <button className="btn btn-primary" style={btn_close} onClick={()=>setDetails(false)}>Close</button>
                </div>}
                <button className="btn btn-secondary" 
                onClick={() => setDetails(true)} style={{marginTop: '20px'}}
                >See Details</button>
            </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { 
    weather: state.weather,
  }
}

export default connect(mapStateToProps, {fetchWeather})(WeatherApp);