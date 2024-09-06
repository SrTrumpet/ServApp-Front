import  { useEffect, useReducer } from 'react';PlacesContext
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../../Apis';


export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number],
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}


export const PlacesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect (() => {
        getUserLocation()
            .then(  lngLat => dispatch({ type: 'setUserLoaction', payload: lngLat }) )
    }, [])

    const searchPlacesByTerm = async ( query: string ) => {
        if( query.length === 0 ) return []; //Todo:
        if( !state.userLocation ) throw new Error('No hay ubiacación del usuario');


        const resp = await searchApi.get(`/${ query }.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        });

        console.log(resp.data);

        return resp.data;

    }

    return (
        <PlacesContext.Provider value={{
            ...state,
            
            //Metodos
            searchPlacesByTerm
        }}>
            { children }
        </PlacesContext.Provider>
    )
}