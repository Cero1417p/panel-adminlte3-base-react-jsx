import { types } from "../../types/types";



export const authReducer = (state = {valor:false},action) => {
    switch (action.type){
        case types.login:
            return{
                ...state,
                valor:action.payload.valor,
                usuario:action.payload.usuario,
                token:action.payload.token
            }
        
        case types.logout:
            return {
                ...state,
                valor:false
            }

        default:
            return state;
    }
}