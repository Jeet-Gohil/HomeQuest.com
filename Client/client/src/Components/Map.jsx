import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import '../Components/homeComp/gradient.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '60vw',
  height: '80vh',
};


const Map = ({latitude, longitude}) => {
    const center = {
        lat: latitude, // default latitude
        lng: longitude, // default longitude
      };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    
    
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>


  );
};

export default Map;
