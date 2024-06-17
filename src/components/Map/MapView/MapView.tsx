import { useContext } from "react"
import { PlacesContext } from "../Places/PlacesContext"
import { Loading } from "./"




export const MapView = () => {
  const {isLoading, userLocation} =  useContext( PlacesContext )

  if ( isLoading ){
    return( <Loading/>)
  }

  return (
    <div className="text-white">
      { userLocation?.join(',') }
    </div>
  )
}

	



