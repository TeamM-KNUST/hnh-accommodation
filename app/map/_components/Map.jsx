"use client";


import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "react-responsive";

export const Map = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const coordinates = {
    lat:0, lng:0
  }


const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <div className="w-full h-[105vh]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={() => { }}
        onChildClick={() => { }}
      >
 <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />

      </GoogleMapReact>
   
    </div>
  )
}