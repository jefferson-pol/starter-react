import { CAMBIAR_USUARIO, CAMBIAR_EMAIL, CAMBIAR_NOMBRE } from "./constReducers/usersConsts";

const inicialState = {
  user: "jefferson",
  email: "pol.jefferson@gmail.com",
};

export default function userReducer(state = inicialState, action) {
  switch (action.type) {
    case CAMBIAR_USUARIO: {
      return action.usuario;
    }
    case CAMBIAR_NOMBRE:{
      return {
        ...state,
        user: action.nombre
      };
    }
    case CAMBIAR_EMAIL:{
      return {
        ...state,
        email: action.email
      };
    }
    default:
      return state;
  }
}
