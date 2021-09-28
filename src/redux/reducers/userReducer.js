import { CAMBIAR_USUARIO } from "./constReducers/usersConsts";

const inicialState = {
    user: 'jefferson',
    email: 'pol.jefferson@gmail.com'
}

export default function userReducer(state=inicialState,action){
    switch(action.type){
        case CAMBIAR_USUARIO:
            return action.usuario;
        default:
            return state;
    }

}