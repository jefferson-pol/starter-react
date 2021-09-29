import { LOAD_FACTURAS } from '../constReducers/facturasConst';
import { requestsFacturas } from '../../../requests/facturasRequests';

const setFacturas = facturas =>({
  type: LOAD_FACTURAS,
  facturas
})

const getFacturas = () => (dispatch, getStore) =>{
  requestsFacturas.getFacturas().then(result=>{
    const facturas = result.data.data;
    dispatch(setFacturas(facturas));
  }).catch(e =>{ console.log(e);})
}

export const actions = {
  getFacturas
};
