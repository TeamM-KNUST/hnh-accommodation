import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox= () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_APP_MAPBOX_ACCESS_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return <div ref={mapContainerRef} style={{ height: '450%' }}></div>;
};

export default Mapbox;