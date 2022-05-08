import React, {useEffect, useRef, useState} from 'react'

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
        <div>Map</div>
    )
}

export default Map;
