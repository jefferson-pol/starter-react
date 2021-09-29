import config from './config';
import axios from 'axios';

const getUsuarios = () => {
    return axios.get(config.url_repo+'users');
}

export const requestsUsers = {
    getUsuarios
};
