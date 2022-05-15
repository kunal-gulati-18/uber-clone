import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../../public/assets/carList";

const CarList = ({ coordinates }) => {
  const [rideDuration, setRideDuration] = useState();

  useEffect(() => {
    if(!coordinates?.pickup || !coordinates?.dropoff) return;
    console.log('coord', coordinates)
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates.pickup[0]},${coordinates.pickup[1]};${coordinates.dropoff[0]},${coordinates.dropoff[1]}?access_token=pk.eyJ1Ijoia3VuYWxndWxhdGkwODE4IiwiYSI6ImNsMngyZWlxNjBybHkza2xibjJpY3NrbjEifQ.jph0u9y6XM4ySmoi0J-eGQ`).then(res => res.json()).then(() => {

    });
  }, [coordinates]);

  return (
    <CarRideWrapper>
      {carList.map((car) => (
        <CarOptionsWrapper key={car.service}>
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
  );
};

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


export default CarList;
