import React from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "react-responsive";

export const Map = () => {
  const matches = useMediaQuery({ query: "(min-width: 768px)" });
  const coordinates = {
    lat: 59.95,
    lng: 30.33,
  };
  return (
    <div className="h-[84vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={11}
        margin={[50, 50, 50, 50]}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  );
};
