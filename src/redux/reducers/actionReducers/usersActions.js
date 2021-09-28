import { CAMBIAR_USUARIO } from "../constReducers/usersConsts";

const setUsuario = usuario =>({
    type: CAMBIAR_USUARIO, 
    usuario
})

export  const actions = { 
    setUsuario 
};