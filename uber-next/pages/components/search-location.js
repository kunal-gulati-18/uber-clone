import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchLocation = () => {
  const router = useRouter();
  const [fields, setFields] = useState({
    pickup: "",
    destination: "",
  });

  const [showError, setShowError] = useState(false);

  const onChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!fields.pickup || !fields.destination) {
      setShowError(true);
      return setTimeout(() => {
        setShowError(false);
      }, 2000);
    }

    router.push(`/components/confirm-page?pickup=${fields.pickup}&destination=${fields.destination}`);
  };

  return (
    <>
      {showError ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">Please enter the required fields.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      ) : null}
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
                <img
                  className="w-5 h-5"
                  src="https://img.icons8.com/ios/50/000000/plus-math.png"
                />
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
            <ConfirmLocationButton onClick={handleClick}>
              Confirm Locations
            </ConfirmLocationButton>
          </ConfirmLocationButtonWrapper>
        </SearchBodyWrapper>
      </SearchWrapper>
    </>
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
