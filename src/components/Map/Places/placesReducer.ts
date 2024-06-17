import { PlacesState } from "./PlacesProvider";


type PlacesAction = { type: 'setUserLoaction', payload: [number, number] };


export const placesReducer = ( state: PlacesState, action: PlacesAction ): PlacesState => {
    switch(action.type ){
        case 'setUserLoaction':

            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }


        default:
            return state;
    }


    
}