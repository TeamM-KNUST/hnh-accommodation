"use client";

import ReactMapGL, {

  Marker,
  
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

    return (
      <div className="w-screen h-screen">
            
    <ReactMapGL
      {...viewport}
      mapboxAccessToken={process.env.NEXT_PUBLIC_APP_MAPBOX_ACCESS_TOKEN}
                mapStyle="mapbox://styles/sabudu/clyz4uy1d00ea01r07tasaoj1"
              
        >
        <Marker latitude={37.7577} longitude={-122.4376}>
            <div className="text-2xl">📍</div>
        </Marker>
    </ReactMapGL>
      </div>
  );
};
