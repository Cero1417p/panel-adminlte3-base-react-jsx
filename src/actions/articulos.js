import { types } from '../types/types';

import Swal from 'sweetalert2';
import 'animate.css';

import { peticion } from '../helpers/helperBackendApi';

export const peticionArticulos = () => {
    return async (dispatch) => {

        const response = await peticion('api/articulos/');
        //  'api/articulos/page/0'
        if (response?.ok) {

            //let resp = await response.json();
            //let articulos = await resp.content;

            let articulos = await response.json();

            console.log(articulos);
            //console.log(articulos.slice(0,1000));

            localStorage.setItem('articulos', JSON.stringify(articulos.slice(0,100)));

            dispatch(
                articulosStore(articulos)
            );
            //Swal.fire('Correcto','medicamentos cargados','question')
            console.log("medicamentos cargados...");
        } else {
            if (response.status === 401) {
                const obj = await response.json()
                //console.log(response.error)
                Swal.fire('Error', obj.error, 'error');
            } else {
                Swal.fire('Error', 'Simple error', 'error');
            }

        }
    }
}

export const peticionArticulo = (id) => {
    return async (dispatch) => {

        const response = await peticion('api/articulos/' + id);

        if (response?.ok) {

            let articulo = await response.json();
            //console.log(articulo)
            localStorage.setItem('articulo', JSON.stringify(articulo));

            dispatch(
                articuloStore(articulo)
            );
            //Swal.fire('Correcto','medicamentos cargados','question')
            console.log("medicamento cargado correctamente...");
        } else {
            if (response.status === 401) {
                const obj = await response.json()
                //console.log(response.error)
                Swal.fire('Error', obj.error, 'error');
            } else {
                Swal.fire('Error', 'Simple error', 'error');
            }

        }
    }
}

export const articuloStore = (articulo) => {
    return (
        {
            type: types.articulo,
            payload: {
                articulo
            }
        }
    );
}

export const articulosStore = (articulos) => {

    return (
        {
            type: types.articulos,
            payload: {
                articulos
            }
        }
    )
}

export const createArticulo = (articulo)=>{
    return async(dispatch)=>{

        delete articulo.idarticulo;
        if( !articulo.categoria?.idcategoria ){
            delete articulo.categoria;
        }

        const response = await peticion('api/articulos','POST',articulo);
        

        if(response?.ok){

            let respuesta = await response.json();
            dispatch(
                {
                    type:types.createArticulo,
                    payload:{
                        articulo
                    }
                }
            )

            Swal.fire('Creado con éxito',respuesta.mensaje,'question')
            console.log("medicamento creado...");
            
        }else {
            if (response.status === 401) {
                const obj = await response.json()
                //console.log(response.error)
                Swal.fire('Error', obj.error, 'error');
            } else {
                const obj = await response.json()
                Swal.fire(obj.mensaje, obj.error, 'error');
            }

        }
    }
}

export const updateArticulo = (articulo) =>{

    return async(dispatch)=>{

        if( !articulo.categoria?.idcategoria ){
            delete articulo.categoria;
        }

        const response = await peticion('api/articulos/'+articulo.idarticulo,'PUT',articulo);
        

        if(response?.ok){

            let respuesta = await response.json();
            dispatch(
                {
                    type:types.createArticulo,
                    payload:{
                        articulo
                    }
                }
            )

            Swal.fire('Actualizado con éxito',respuesta.mensaje,'question')
            console.log("medicamento creado...");
            
        }else {
            if (response.status === 401) {
                const obj = await response.json()
                //console.log(response.error)
                Swal.fire('Error', obj.error, 'error');
            } else {
                const obj = await response.json()
                Swal.fire(obj.mensaje, obj.error, 'error');
            }

        }

    }

}

export const deleteArticulo= (id)=>{

    return async(dispatch)=>{
        const response = await peticion('api/articulos/'+id,'DELETE');

        if (response?.ok) {

            let respuesta = await response.json();//art elim

            dispatch(
                {
                    type:types.deleteArticulo,
                    payload:{
                        id
                    }
                }
            );
            Swal.fire('Eliminado con éxito',respuesta.mensaje,'question')
            console.log("medicamento eliminado...");
        } else {
            if (response.status === 401) {
                const obj = await response.json()
                //console.log(response.error)
                Swal.fire('Error', obj.error, 'error');
            } else {
                const obj = await response.json()
                Swal.fire(obj.mensaje, obj.error, 'error');
            }

        }


    }

}

