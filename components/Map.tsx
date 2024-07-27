"use client";

import GoogleMapReact from "google-map-react";
import { useRouter } from "next/navigation";

const Map = () => {
  const router = useRouter();
  const coordinates = {
    lat: 6.67209,
    lng: -1.560873,
  };
  return (
    <div
      className="h-[84vh] w-full cursor-pointer "
      onClick={()=>router.push(
        "https://www.google.com/maps/place/6%C2%B040'19.5%22N+1%C2%B033'39.1%22W/@6.67209,-1.560873,1751m/data=!3m1!1e3!4m4!3m3!8m2!3d6.67209!4d-1.5608728?hl=en-US&entry=ttu"
      )}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
