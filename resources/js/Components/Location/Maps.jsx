import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';

const MapEventListener = ({ searchLocation }) => {
  const map = useMap();

  useEffect(() => {
    const handleMapDrag = () => {
      const center = map.getCenter();
      searchLocation(center.lat, center.lng);
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

      {locations.map((location, index) => (
        <Marker key={index} position={[location.latitude, location.longitude]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Maps;
