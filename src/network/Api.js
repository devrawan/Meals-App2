
import axios from 'react-native-axios';

//const apikey = "9a525c9f57msh8db71f4e654153ap1291d8jsn0b996b332d57";

export default  loadMeals= () =>{

    const options = {
        method: 'GET',
        url: 'https://mocki.io/v1/07283c8c-036f-4dc9-9f3c-5ffda0a4d4c6',
        headers: {
          'Accept': 'application/json',

          'Content-Type': 'application/json',
          'x-rapidapi-host': 'book4.p.rapidapi.com'
        }
      };
      
     return  axios.request(options);
} 