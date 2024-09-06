import { useContext } from 'react'
import { MapContext, PlacesContext } from './context'

export const BtnMyLocation = () => {
  const { map, isMapReady} = useContext(MapContext);
  const { userLocation} = useContext(PlacesContext)




  const onClick = () => {
    if(!isMapReady) throw new Error('Mapa no está listo')
    if(!isMapReady) throw new Error('No hay ubicación de usuario')
    
    map?.flyTo({
      zoom: 14,
      center: userLocation
    })
      


  }

  return (
    <button 
        className="fixed top-20 right-20 z-50 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={onClick}>
      Mi Ubicación
    </button>

  )
}
