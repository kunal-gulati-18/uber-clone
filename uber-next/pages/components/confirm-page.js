import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import mapboxgl from "mapbox-gl";
import Link from "next/link";
import axios from "axios";
import { carList } from "../../public/assets/carList";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia3VuYWxndWxhdGkwODE4IiwiYSI6ImNsMngyZWlxNjBybHkza2xibjJpY3NrbjEifQ.jph0u9y6XM4ySmoi0J-eGQ";

const ConfirmPage = () => {
  const map = useRef();
  const mapContainer = useRef(null);
  const router = useRouter();
  const [lng, setLng] = useState(77.261);
  const [lat, setLat] = useState(28.5354);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const pickup = router?.query?.pickup;
    const destination = router?.query?.destination;

    if (!pickup || !destination) {
      return;
    }

    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [lng, lat],
      zoom: zoom,
    });

    const fetchData = async () => {
        let pickupData = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?access_token=pk.eyJ1Ijoia3VuYWxndWxhdGkwODE4IiwiYSI6ImNsMngyZWlxNjBybHkza2xibjJpY3NrbjEifQ.jph0u9y6XM4ySmoi0J-eGQ&limit=1`
        );
          console.log('pic', pickupData)
        let destinationData = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${destination}.json?access_token=pk.eyJ1Ijoia3VuYWxndWxhdGkwODE4IiwiYSI6ImNsMngyZWlxNjBybHkza2xibjJpY3NrbjEifQ.jph0u9y6XM4ySmoi0J-eGQ&limit=1`
        );
        addToMap({ pickupData: pickupData?.data?.features?.length ?  pickupData?.data?.features[0]?.center : [], destinationData: destinationData?.data?.features?.length ? destinationData?.data?.features[0]?.center : [] });
      };

      fetchData();
  }, [router.query]);

  const addToMap = ({ pickupData, destinationData }) => {
    const marker1 = new mapboxgl.Marker({
        color: "green",
        }).setLngLat(pickupData)
        .addTo(map.current);

    const marker2 = new mapboxgl.Marker({
            color: "red",
            }).setLngLat(destinationData)
            .addTo(map.current);
  }
  return (
    <ConfirmPageWrapper>
      <MapWrapper ref={mapContainer} id="confirm-page-map-wrapper"></MapWrapper>
      <ShowRideWrapper>
        <MessageWrapper>Choose a ride, or swipe up for more</MessageWrapper>
        <CarRideWrapper>
          {carList.map((car) => (
            <CarOptionsWrapper>
              <CarWrapper>
                <CarImage src={car.imgUrl} />
                <CarLabelWrapper>
                  <CarLabel>{car.service}</CarLabel>
                  <CarTimeWrapper>5 min away</CarTimeWrapper>
                </CarLabelWrapper>
              </CarWrapper>
              <PriceWrapper>${car.multiplier}</PriceWrapper>
            </CarOptionsWrapper>
          ))}
        </CarRideWrapper>
      </ShowRideWrapper>
      <FooterWrapper>
        <ConfirmButton>Confirm uber</ConfirmButton>
      </FooterWrapper>
    </ConfirmPageWrapper>
  );
};

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
    border-b-2 border-slate-200 flex items-center justify-center text-sm text-slate-500 p-1
`;

const CarRideWrapper = tw.div`
    flex flex-col p-4 gap-y-8 max-h-[80%] overflow-y-auto
`;

const CarOptionsWrapper = tw.div`
    flex justify-between items-center
`;

const CarImage = tw.img`
    flex items-center gap-x-2 h-12 w-12
`;

const CarWrapper = tw.div`
    flex items-center gap-x-2
`;

const CarLabelWrapper = tw.div`
flex flex-col
`;

const CarLabel = tw.div`
text-sm font-medium
`;

const CarTimeWrapper = tw.div`
text-xs text-sky-700
`;

const PriceWrapper = tw.div`
    text-sm
`;

const FooterWrapper = tw.div`
absolute bottom-0 w-full p-2.5 bg-white border-t-2 border-slate-200
`;

const ConfirmButton = tw.button`
bg-black text-white text-xl w-full p-3 flex items-center justify-center
`;

export default ConfirmPage;
