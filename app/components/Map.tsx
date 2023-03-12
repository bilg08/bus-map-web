'use client';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents, Popup } from 'react-leaflet';

export function ChangeView({ coords }: {coords: Array<number> | any}) {
  const map = useMap();
  map.locate().on('locationfound', (e) => {
    console.log(e.latlng.lat, e.latlng.lng)
  })
  map.setView(coords, 12);
  return null;
}

function Map() {
  const [geoData] = useState({ lat: 47.9166464, lng: 106.9088768 });
  const [driversLocation, setDriversLocation] = useState([]);
  const center = [geoData.lat, geoData.lng];
  const markerIcon = new L.Icon({
    iconUrl: 'https://freesvg.org/img/map-pin.png',
    iconSize: [30, 30],
  })
  return (
    <MapContainer center={center} zoom={12} className="w-auto z-10 h-[100vh] flex-1">
      <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
        <Marker icon={markerIcon} position={[47.9166464, 106.9088710]} />
        <Marker icon={markerIcon} position={[47.9166464, 106.90]} />
      <ChangeView coords={center} />
    </MapContainer>
  );
}
export default Map;