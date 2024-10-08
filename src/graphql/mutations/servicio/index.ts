import { gql } from "@apollo/client";

export const AÑADIR_SERVICIO = gql`
    mutation publicarServicio($ocupacion: String!, $categoria: String!, $descripcion: String!, $direccion: String!) {
        publicarServicio(ocupacion: $ocupacion, categoria: $categoria, descripcion: $descripcion, direccion: $direccion) {
            message
        }
    }
`;

export const GET_ALL_SERVICES = gql`
    mutation {
        getAllService{
            id
            nombreUsuario
            ocupacion
            categoria
            descripcion
            direccion
            calificacion
            click
        }
}
`

export const BUSCAR_SERVICIO_NOMBRE = gql`
    query findAllServicesByName($name: String!){
        findAllServicesByName(name:$name){
            id
            nombreUsuario
            ocupacion
            categoria
            descripcion
            direccion
            calificacion
            click
        }
    }
`

export const GET_MY_SERVICE = gql`
    query{
        getMyServices{
            id
            ocupacion
        }
    }
`

export const GET_POPULAR_SERVICES = gql`
    query{
    getPupularService{
        id
        nombreUsuario
        ocupacion
        calificacion
        direccion
    }
}
`