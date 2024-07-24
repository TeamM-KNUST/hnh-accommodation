"use client";

import ReactMapGL, {
  Layer,
  Marker,
  NavigationControl,
  Source,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 4,
  });

    return (
      <div className="w-screen h-screen">
            
    <ReactMapGL
      {...viewport}
      mapboxAccessToken={process.env.NEXT_PUBLIC_APP_MAPBOX_ACCESS_TOKEN}
                mapStyle="mapbox://styles/sabudu/clyz4uy1d00ea01r07tasaoj1"
              
    ></ReactMapGL>
      </div>
  );
};
