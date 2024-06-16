import mapboxgl from 'mapbox-gl';
import React, { useRef, useEffect } from 'react';

const MapView: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current, // Referencia al contenedor del mapa
        style: 'mapbox://styles/mapbox/streets-v12', // URL del estilo
        center: [-74.5, 40], // Posición inicial [lng, lat]
        zoom: 9, // Nivel de zoom inicial
      });

      // Limpieza al desmontar el componente
      return () => map.remove();
    }
  }, []);

  return <div ref={mapContainerRef} style={{ width: '700px', height: '600px' }} />;
};

export default MapView;


	



