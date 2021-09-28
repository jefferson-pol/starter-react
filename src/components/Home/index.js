import { connect } from "react-redux";
import { actions } from "../../redux/reducers/actionReducers/usersActions";
import Home from "./home";

const mstp = (state) => {
    return { ...state.usuario}
}

const mdtp = { ...actions };

export default connect(mstp,mdtp)(Home);
