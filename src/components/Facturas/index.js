import { connect } from "react-redux";
import { actions } from "../../redux/reducers/actionReducers/facturasActions";
import Facturas from './facturas';

const mstp = (state) => {
  return { ...state.facturas}
}

const mdtp = { ...actions };

export default connect(mstp,mdtp)(Facturas);
