import config from './config';
import axios from 'axios';

const getUsuarios = () => {
    return axios.get(config.url+'users');
}

export const requestsUsers = {
    getUsuarios
};