import React, {useEffect, useRef, useState} from 'react'
import mapboxgl from 'mapbox-gl';
import tw from 'tailwind-styled-components';

mapboxgl.accessToken = 'pk.eyJ1Ijoia3VuYWxndWxhdGkwODE4IiwiYSI6ImNsMngyZWlxNjBybHkza2xibjJpY3NrbjEifQ.jph0u9y6XM4ySmoi0J-eGQ';

const MapContainer = tw.div `
  flex-1
`;

const Map = () => {
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
		<MapContainer ref={mapContainer}
			id="map-container">Map</MapContainer>
	)
}

export default Map;
