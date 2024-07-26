import React from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "react-responsive";
import { IoLocationOutline } from "react-icons/io5";

export const Map = () => {
  const matches = useMediaQuery({ query: "(min-width: 768px)" });
  const coordinates = {
    lat: 0,
    lng: 0,
  };
  return (
    <div className="h-[84vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
       argin={[50, 50, 50, 50]}
        options={{
          fullscreenControl: false,
          zoomControl: false,
          streetViewControl: false,
        }}
        onChange={() => { }}
        onClick={() => { }}

      >
      
      
      </GoogleMapReact>
    </div>
  );
};