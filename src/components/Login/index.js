import { connect } from "react-redux";
import { actions } from "../../redux/reducers/actionReducers/usersActions";
import Login from "./login";

const mstp = ( state ) =>{
    return { ...state.usuario }
}

const mdtp = { ...actions };

export default connect(mstp,mdtp)(Login);