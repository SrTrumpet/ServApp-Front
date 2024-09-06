import { useContext, useLayoutEffect, useRef } from "react";
import { PlacesContext, MapContext } from "./context";
import { Loading } from "./";
import { Map, Marker, LngLatLike } from "mapbox-gl";
import axios from "axios";


interface MapViewProps {
  direction?: [number, number];
}

export const MapView: React.FC<MapViewProps> = ({ direction }) => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading && userLocation && direction) {
      const map = new Map({
        container: mapDiv.current!,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: userLocation,
        zoom: 11,
      });

      setMap(map);

      const startMarker = new Marker().setLngLat(userLocation as LngLatLike).addTo(map);
      const endMarker = new Marker().setLngLat(direction as LngLatLike).addTo(map);

      // Obtener y trazar la ruta
      const getRoute = async () => {
        const response = await axios.get(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${userLocation.join(',')};${direction.join(',')}?geometries=geojson&access_token=pk.eyJ1IjoiY3Jpc3RpYW4xNyIsImEiOiJjbHhpOGt6MjYxbTl4MnFvdjFnOTlmNHVyIn0.kCns696dW_1ZZaK8qXtAFQ`
        );

        const data = response.data;
        const route = data.routes[0].geometry.coordinates;

        // Crear una fuente y una capa de línea para la ruta
        map.on('load', () => {
          map.addSource('route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: route,
              },
            },
          });

          map.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#95D5B2',
              'line-width': 4,
            },
          });
        });
      };

      getRoute();
    }
  }, [isLoading, userLocation, direction]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      className="text-white"
      style={{
        width: '700px',
        height: '600px',
        position: 'fixed',
      }}
    >
      {userLocation?.join(',')}
    </div>
  );
};

	



