import axios from 'axios';

export const getCarbonIntensityDetailsAsync = () => {
    let promise = axios.get('https://api.carbonintensity.org.uk/intensity')
                       .then(response => response.data)
                       .then(json => json.data[0]);  // Response JSON contains a "data" array ¯\_(ツ)_/¯
    return promise;
}
