import React, { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import mapboxgl from 'mapbox-gl';
import Link from 'next/link';
import axios from 'axios';

mapboxgl.accessToken = 'pk.eyJ1Ijoia3VuYWxndWxhdGkwODE4IiwiYSI6ImNsMngyZWlxNjBybHkza2xibjJpY3NrbjEifQ.jph0u9y6XM4ySmoi0J-eGQ';

const ConfirmPage = () => {
    const map = useRef();
    const mapContainer = useRef(null);
    const router = useRouter();
    const [lng, setLng] = useState(77.2610);
	const [lat, setLat] = useState(28.5354);
	const [zoom, setZoom] = useState(9);

    useEffect(() => {
        const pickup = router?.query?.pickup;
        const destination = router?.query?.destination;

        if(!pickup || !destination) {
            return
        }
        const fetchData = async () => {
            let data = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup};${destination}.json?access_token=pk.eyJ1Ijoia3VuYWxndWxhdGkwODE4IiwiYSI6ImNsMngyZWlxNjBybHkza2xibjJpY3NrbjEifQ.jph0u9y6XM4ySmoi0J-eGQ`)
            return data;
        }

        const data = fetchData();

        // console.log('data', data)
        // return
        if(map.current) return;
        map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [
				lng, lat
			],
			zoom: zoom
		});
    }, [router.query]);
    return (
        <ConfirmPageWrapper>
            <MapWrapper ref = {mapContainer} id="confirm-page-map-wrapper">
                Hello
            </MapWrapper>
            <ShowRideWrapper>
                <MessageWrapper>
                    Choose a ride, or swipe up for more
                </MessageWrapper>
            </ShowRideWrapper>
            <FooterWrapper>
                <ConfirmButton>
                    Confirm uber
                </ConfirmButton>
            </FooterWrapper>
        </ConfirmPageWrapper>
    )
}

const ConfirmPageWrapper = tw.div`
    h-screen flex flex-col
`;

const MapWrapper = tw.div`
    flex-1

`;

const ShowRideWrapper = tw.div`
    flex-1
`;

const MessageWrapper = tw.div`
    border-b-2 border-slate-200 flex items-center justify-center text-sm text-slate-500
`;

const CarOptionsWrapper = tw.div``

const FooterWrapper = tw.div`
p-2.5 bg-white border-t-2 border-slate-200
`;

const ConfirmButton = tw.button`
bg-black text-white text-xl w-full p-3 flex items-center justify-center
`;

export default ConfirmPage
