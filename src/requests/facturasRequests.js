import config from './config';
import axios from 'axios';

const getFacturas = () => {
    return axios.get(config.url_repo+'factura');
}

export const requestsFacturas = {
  getFacturas
};
