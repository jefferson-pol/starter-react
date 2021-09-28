
const inicialState = {
    user: 'jefferson',
    email: 'pol.jefferson@gmail.com'
}

export default function userReducer(state=inicialState,action){
    switch(action.types){
        default:
            return state;
    }

}