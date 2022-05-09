import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

const SearchLocation = () => {
  const [fields, setFields] = useState({
    pickup: "",
    destination: "",
  });

  const onChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if(!pickup || !destination) {

    }

    
  }

  return (
    <SearchWrapper>
      <SearchHeaderWrapper>
        <Link href="/">
          <BackButton>
            <img
              className="h-9 w-9"
              src="https://img.icons8.com/ios-filled/50/000000/left.png"
            />
          </BackButton>
        </Link>

        <FieldWrapper>
          <FieldMarkers className="flex flex-col">
            <img
              className="h-3 w-3"
              src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
            />
            <img src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
            <img
              className="h-3.5 w-3.5"
              src="https://img.icons8.com/windows/50/000000/square-full.png"
            />
          </FieldMarkers>
          <FieldInputs className="flex flex-col">
            <FieldInput
              type="text"
              value={fields.pickup}
              onChange={onChange}
              name="pickup"
              placeholder="Enter pickup location"
            />
            <FieldInput
              type="text"
              onChange={onChange}
              value={fields.destination}
              name="destination"
              placeholder="Where to?"
            />
          </FieldInputs>
          <FieldAddButtonWrapper>
            <FieldAddButton>
                <img className = "w-5 h-5" src="https://img.icons8.com/ios/50/000000/plus-math.png" />
            </FieldAddButton>
          </FieldAddButtonWrapper>
        </FieldWrapper>
      </SearchHeaderWrapper>
      <SearchBodyWrapper>
        <SavedPlacesWrapper>
          <SavedPlacesImage>
            <img
              className="h-8 w-8 p-1"
              src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
            />
          </SavedPlacesImage>
          <span>Saved Places</span>
        </SavedPlacesWrapper>
        <ConfirmLocationButtonWrapper>
          <ConfirmLocationButton onClick = {handleClick}>Confirm Locations</ConfirmLocationButton>
        </ConfirmLocationButtonWrapper>
      </SearchBodyWrapper>
    </SearchWrapper>
  );
};

const SearchWrapper = tw.div`
flex flex-col h-screen
`;

const SearchHeaderWrapper = tw.div`
bg-white h-1/4 flex flex-col p-2 gap-y-3
`;

const BackButton = tw.div`
cursor-pointer w-max rounded-full p-1 transition hover:bg-gray-200
`;

const FieldWrapper = tw.div`
    flex gap-x-1 items-center
`;

const FieldMarkers = tw.div`
w-1/12 items-center
`;

const FieldMarkerImage = tw.img`
h-3 w-3
`;

const FieldInputs = tw.div`
    gap-y-4 w-11/12
`;

const FieldInput = tw.input`
form-control
block
w-full
px-3
py-1.5
h-10
text-base
font-normal
text-gray-700
bg-gray-200 bg-clip-padding
rounded
transition
ease-in-out
outline-none
border-none
m-0
`;
const FieldAddButtonWrapper = tw.div`
w-1/12 flex items-center justify-center
`;

const FieldAddButton = tw.div`
w-max rounded-full bg-gray-200 p-2 flex items-center justify-center cursor-pointer
`;

const SearchBodyWrapper = tw.div`
bg-gray-200 h-full
`;

const SavedPlacesWrapper = tw.div`
bg-white flex gap-x-2 mt-2 flex items-center justify-start p-3
`;

const SavedPlacesImage = tw.div`
bg-gray-400 p-0.5 rounded-full
`;

const ConfirmLocationButtonWrapper = tw.div`
    flex flex-items-center justify-content-center w-full p-3
`;

const ConfirmLocationButton = tw.button`
    bg-black text-white text-xl w-full p-2 transition hover:bg-gray-500
`;

export default SearchLocation;
