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
