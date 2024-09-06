import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        accessToken: 'pk.eyJ1IjoiY3Jpc3RpYW4xNyIsImEiOiJjbHhpOGt6MjYxbTl4MnFvdjFnOTlmNHVyIn0.kCns696dW_1ZZaK8qXtAFQ',

    }
})

export default searchApi;