import { LOAD_FACTURAS } from "./constReducers/facturasConst";

const initialState = {
  facturas: [],
  factura: {}
}

export default function facturasReducer( state= initialState, action){
  switch(action.type){
    case LOAD_FACTURAS:{
      return {
        ...state,
        facturas: action.facturas
      }
    }
    default: {
      return state;
    }
  }

}
