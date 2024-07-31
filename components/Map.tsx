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
      onClick={() =>
        router.push(
          "https://www.google.com/maps/place/No+Weapon+Hostel/@6.668046,-1.5622997,1038m/data=!3m1!1e3!4m6!3m5!1s0xfdb9486ce44cd23:0xa48461f7f19a87c!8m2!3d6.6672845!4d-1.5564873!16s%2Fg%2F1v6wqplv?entry=ttu"
        )
      }
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
