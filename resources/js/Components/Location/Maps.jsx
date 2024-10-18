import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: '/images/location/person-standing.svg',
  iconSize: [50, 50],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [50, 50],
});

const MapEventListener = ({ searchLocation }) => {
  const map = useMap();

  useEffect(() => {
    const handleMapDrag = () => {
      const center = map.getCenter();
      const bounds = map.getBounds();

      searchLocation(center.lat, center.lng, bounds._northEast.lat, bounds._northEast.lng, bounds._southWest.lat, bounds._southWest.lng);
    };

    map.on('moveend', handleMapDrag);

    return () => {
      map.off('moveend', handleMapDrag);
    };
  }, [map, searchLocation]);

  return null;
};

const Maps = ({ locations, point, searchLocation }) => {
  const center = point[0] ? point : [locations[0].latitude, locations[0].longitude];
  const isLocationEnabled = import.meta.env.VITE_ENABLE_LOCATION === true ?? true;
console.log(isLocationEnabled);
  return (
    <MapContainer
      center={center}
      zoom={14}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapEventListener searchLocation={searchLocation} />

      {isLocationEnabled && locations.map((location, index) => (
        <Marker key={index} position={[location.latitude, location.longitude]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}

      {isLocationEnabled &&
        <Marker position={center} icon={customIcon}></Marker>
      }
    </MapContainer>
  );
};

export default Maps;
