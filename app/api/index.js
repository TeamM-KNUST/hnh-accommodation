/* eslint-disable consistent-return */
import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/locations/auto-complete'


 const options = {
  params: {
    query: 'Kwame Nkrumah University of Science and Technology',
    lang: 'en_US',
    units: 'km'
  },
  headers: {
    'x-rapidapi-key': '832c7dcd13msh2cdc9982362d48dp1579e2jsn66ececa57db5',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async () => {
  try {
  
    const { data: { data } } = await axios.get(URL, options);

    return data;
  }
  catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
      console.log(error, "Wahat is ");
      
  }
};
