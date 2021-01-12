import axios from 'axios';
// Axios to make network requests

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID BUbyqoj-bmWpAkfrvqhyWPnOHNPwrj2ztf7tY_pEvnI' 
    }
});