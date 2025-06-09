import axios from 'axios';

const register_url = "http://localhost:9001/users/"
const login_url = "http://localhost:9002/users/"

const registerUser = async(user) =>{
    return axios.post(`${register_url}register`, user)
        .then(result => result.data)
        .catch(error => {throw error});
}

const loginUser = async(user) =>{
    console.log(user);
    console.log(`${login_url}login`);
    return axios.post(`${login_url}login`, user)
        .then(result => result.data)
        .catch(error => {throw error});
}


export {registerUser, loginUser};