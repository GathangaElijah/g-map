import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import { use } from 'react';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url),
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url),
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url),
});

// Component that moves map when position updates
const FlyToUserLocation = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 15);
    }
  }, [position, map]);

  return null;
};

const Map = () => {
  const [position, setPosition] = useState(null); 
  // const mapRef = useRef(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPosition = [pos.coords.latitude, pos.coords.longitude];
        console.log("Position acquired:", newPosition)
        setPosition(newPosition);
      },
      (err) => {
        console.error('Geolocation error:', err);
      }
    );
  }, []);

  return (
    <MapContainer
      center={position || [-1.286389, 36.817223]}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
      whenCreated={(mapInstance) => 
      { mapRef.current = mapInstance;
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {position && (
      <>
      <Marker position={position}>
        <Popup>You are here.</Popup>
      </Marker>
      <FlyToUserLocation position={position}/>
      </>
      )}
    </MapContainer>
  );
};

export default Map;
