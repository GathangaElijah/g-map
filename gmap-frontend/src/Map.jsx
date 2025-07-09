import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const Map = () => {
  const [position, setPosition] = useState([ -1.286389, 36.817223 ]); // Nairobi default
  const mapRef = useRef(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPosition = [pos.coords.latitude, pos.coords.longitude];
        setPosition(newPosition);

        // If map is already loaded, pan to new position
        const map = mapRef.current;
        if (map) {
          map.setView(newPosition, 15);
        }
      },
      (err) => {
        console.error('Geolocation error:', err);
      }
    );
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
      whenCreated={(mapInstance) => { mapRef.current = mapInstance }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position}>
        <Popup>You are here.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
