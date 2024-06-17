// mapboxService.ts
import mapboxgl from 'mapbox-gl';

// Configura tu token de acceso de Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3RpYW4xNyIsImEiOiJjbHhpOGt6MjYxbTl4MnFvdjFnOTlmNHVyIn0.kCns696dW_1ZZaK8qXtAFQ';

// Define el tipo para el centro del mapa
type CenterType = [number, number];

const initializeMap = (
  container: HTMLElement, // Especifica que container debe ser un HTMLElement
  center: CenterType = [-71.35192634200634, -29.964393667098573], // Usa el tipo CenterType para el centro
  zoom: number = 12 // Especifica que zoom debe ser un número
): mapboxgl.Map => {
    return new mapboxgl.Map({
        container,
        style: 'mapbox://styles/mapbox/streets-v12',
        center,
        zoom,
    });
};

const getCoordinatesFromAddress = async (address: string): Promise<[number, number] | null> => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?country=CHL&access_token=${mapboxgl.accessToken}`;
    try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.features && data.features.length > 0) {
        const coordinates: [number, number] = data.features[0].center;
        return coordinates;
    }
    } catch (error) {
    console.error('Error fetching coordinates:', error);
    }
    return null;
};


export { initializeMap, getCoordinatesFromAddress };
