import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query GetUsers {
        getUsers {
            id
            name
    }
}
`;

export const INICIO_SESION = gql`
    query InicioSesion {
        veriUser {
            email
            pass
        }
    }
`;