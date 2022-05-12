import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function getConfig(token){
    return { headers: { Authorization: `Bearer ${token}` } };
}

function signIn(body){
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
}

function signUp(body){
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function getCoffees(){
    const promise = axios.get(`${BASE_URL}/coffees`);
    return promise;
}

const api = { signIn, signUp, getCoffees }

export default api;