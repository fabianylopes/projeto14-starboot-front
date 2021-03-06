import axios from 'axios';

const BASE_URL = 'https://star-boot.herokuapp.com';

function getConfig(token){
    return { headers: { Authorization: `Bearer ${token}` } };
}

function signUp(body){
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function signIn(body){
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
}

function putBag(body){
    const promise = axios.put(`${BASE_URL}/bag`, body);
    return promise;
}

function showSuggestion(){
    const promise = axios.get(`${BASE_URL}/suggestions`);
    return promise;
}

function getCoffees(){
    const promise = axios.get(`${BASE_URL}/coffees`);
    return promise;
}

function checkout(body, token){
    const config = getConfig(token);
    const promise = axios.post(`${BASE_URL}/checkout`, body, config);
    return promise;
}

const api = { signIn, putBag, signUp, showSuggestion, getCoffees, checkout }

export default api;