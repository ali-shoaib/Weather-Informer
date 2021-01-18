import axios from 'axios';

const api = {
    key: "6b0622c9563c39321f23396956b93395",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  /*export const fetchWeather = (query) => (dispatch) =>{
        const loading = true;
        const response = 
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api.key}`);        
          dispatch({
            type: 'FETCH_WEATHER',
            payload: response.data
        })
    }*/

    export const fetchWeather = (query) => async(dispatch) =>{
        dispatch(fetchWeatherRequest())
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api.key}`)
        .then((response) =>{ 
        const wd = response.data
        dispatch(fetchWeatherSuccess(wd))
        })
        //.then((loadingData) => dispatch({ type: 'FETCH_WEATHER', data }))
        .catch(error => dispatch(fetchWeatherFailure(error.message)));
    };

    export const fetchWeatherRequest = () => {
      return {
        type: 'FETCH_WEATHER_REQUEST'
      }
    }

    export const fetchWeatherSuccess = users => {
      return {
        type: 'FETCH_WEATHER_SUCCESS',
        payload: users
      }
    }

    export const fetchWeatherFailure = error => {
      return {
        type: 'FETCH_WEATHER_FAILURE',
        payload: error
      }
    }