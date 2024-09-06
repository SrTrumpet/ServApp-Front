import  { useReducer } from 'react' ;
import  {  Map, Marker } from 'mapbox-gl';

import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';
//import Lng from '../../../pages/VerServicio';
//import Lat from '../../../pages/VerServicio';
//import servDirection from '../../../pages/VerServicio';

export interface MapState {
    isMapReady: boolean;
    map?: Map,
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
}


interface Props {
    children: JSX.Element | JSX.Element[];
}


export const MapProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

    const setMap = ( map: Map) => {
    new Marker()
    .setLngLat(map.getCenter())
    .addTo(map);
    dispatch({ type: 'setMap', payload: map})
    };


  return (
    <MapContext.Provider value={{
        ...state,
        setMap,
    }}>
        { children }
    </MapContext.Provider>
  )
}













