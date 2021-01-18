import {combineReducers} from 'redux';

const initialState = {
    loading: false,
    error: '',
    data: null
}

const fetchWeatherReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_WEATHER_SUCCESS':
            console.log(action.payload);
            return {
                loading: false,
                error: '',
                data: action.payload
            };
        case 'FETCH_WEATHER_FAILURE':
            console.log(action.payload);
            return{
                loading: false,
                data: null,
                error: action.payload
            }
        case "FETCH_WEATHER_REQUEST":
            return{
                loading: true
            }
        default:
            return state;
    }
}

/*const weatherListReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_WEATHER':
            return {...state, weathers:[...state.weathers, action.payload]}
        default:
            return state;
    }
}*/

const reducers = combineReducers({
    weather: fetchWeatherReducer,
})

export default reducers;