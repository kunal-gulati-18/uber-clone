import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';
import {useEffect, useRef, useState} from 'react';

mapboxgl.accessToken = 'pk.eyJ1Ijoia3VuYWxndWxhdGkwODE4IiwiYSI6ImNsMngyZWlxNjBybHkza2xibjJpY3NrbjEifQ.jph0u9y6XM4ySmoi0J-eGQ';

export default function Home() {
    const map = useRef(null);
    const mapContainer = useRef();
    const [lng, setLng] = useState(77.2610); 
    const [lat, setLat] = useState(28.5354);
    const [zoom, setZoom] = useState(9);
    useEffect(() => {
        if (map.current) 
            return;
         // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [
                lng, lat
            ],
            zoom: zoom
        });
    }, []);

    return (
        <Container>
            <MapContainer ref={mapContainer}
                id="map-container">Map</MapContainer>
            <ActionItems>Start</ActionItems>
        </Container>
    )
}

const Container = tw.div `
  flex flex-col h-screen
`;
const MapContainer = tw.div `
  flex-1
`;
const ActionItems = tw.div `
  flex-1
`;
