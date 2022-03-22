import https from 'https';
import { getKeyValue, tokenDictionary } from './storeage.service.js';


const getWeather = async (city) => {
    const token = await getKeyValue(tokenDictionary.token);
    if(!token) {
        throw new Error('Не задан ключ API бзадайте его через -t [API_KEY]')
    }

    // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    // url.searchParams.append('q', city);
    // url.searchParams.append('appid', token);
    // url.searchParams.append('lang', 'ru');
    // url.searchParams.append('units', 'metric');
    // https.get(url, (response) => {
    //     let result = '';
    //     response.on('data', (chunk) => {
    //         result += chunk;
    //     })
    //     response.on('end', () => {
    //         console.log(result);
    //     })

       
    // });
}

export { getWeather }