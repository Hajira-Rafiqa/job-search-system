import axios from 'axios';

const base_url = "http://localhost:9003/profiles/"

const getProfile = async(id) =>{
    return axios.get(`${base_url}get/${id}`)
        .then(result => result.data)
        .catch(error => {throw error});
}

const updateProfile = async(profile) =>{
    return axios.put(`${base_url}update`, profile)
        .then(result => result.data)
        .catch(error => {throw error});
}

export {getProfile, updateProfile};