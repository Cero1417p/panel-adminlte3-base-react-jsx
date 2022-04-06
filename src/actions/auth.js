
import { types } from '../types/types';
import { postLogin } from '../helpers/helperLogin';

import Swal from 'sweetalert2';
import 'animate.css';

import { descifrarToken } from '../helpers/helperToken';
import { articulosStore } from './articulos';

export const login = (email, password) => {


    return async (dispatch) => {

        const response = await postLogin(email, password);
        //console.log(JSON.stringify(response));

        if (response?.ok) {

            let resp = await response.json();
            //console.log(resp);
            localStorage.setItem('token', JSON.stringify(resp));
            let token = resp.access_token;
            //console.log(token);
            let dat = descifrarToken(token);

            dispatch(
                loginStore(true, dat, response)
            );




            Swal.fire({
                title: 'Bienvenido ' + dat.nombre,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })

        } else {
            //let resp = await response.json();
            console.log("error : " + response);
            Swal.fire('Error', response, 'error');
        }


    }
}

export const startChecking = () => {
    return (dispatch) => {

        const response = JSON.parse(localStorage.getItem('token'));

        if (response?.access_token?.length > 0) {
            //console.log("paso");
            let dat = descifrarToken(response.access_token);
            dispatch(loginStore(true, dat, response))
        }

        const articulos = JSON.parse(localStorage.getItem('articulos'));

        if (articulos) {
            dispatch(
                articulosStore(articulos)
            );
        }

    }
}


export const loginStore = (valor, usuario, token) => ({
    type: types.login,
    payload: {
        valor,
        usuario,
        token
    }
});


export const logout = () => {
    localStorage.clear();

    return { type: types.logout }
}


export const loginUser = (token)=>{
    return {
        type: types.logout,
        payload: {
            isLoggedIn: true,
            token: token,
            currentUser: {
                name: "MERLIN",
                apellido: "REGALADO"
            },
        }
    }
}