import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';

const Maps = ({locations}) => {
  const center = [locations[0].latitude, locations[0].longitude]; // Latitude and Longitude

  return (
    <MapContainer
      center={center}
      zoom={16}
      style={{ height: '500px', width: '100%' }} // Adjust height and width as needed
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location, index) => (
        <Marker key={index} position={[location.latitude, location.longitude]}>
          <Popup>{location.name}</Popup> {/* Text that shows when marker is clicked */}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Maps;
