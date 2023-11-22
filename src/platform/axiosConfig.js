import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Set your default base URL here
    timeout: 20000, // Set a timeout (optional)

});

// headers: {
//         'X-Api-Key': 'YjxocGqMsPzpfwyeet1d4w==eLuCryEwweI2mao3'
//     }
export default axiosInstance;