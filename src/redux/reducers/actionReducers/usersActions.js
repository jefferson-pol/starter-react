import { CAMBIAR_USUARIO, CAMBIAR_EMAIL, CAMBIAR_NOMBRE } from "../constReducers/usersConsts";

const setUsuario = usuario =>({
    type: CAMBIAR_USUARIO,
    usuario
})

const setNombre = nombre =>({
  type: CAMBIAR_NOMBRE,
  nombre
})

const setEmail = email =>({
  type: CAMBIAR_EMAIL,
  email
})



export  const actions = {
  setUsuario,
  setEmail,
  setNombre
};
