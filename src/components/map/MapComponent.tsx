import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl-react';
import 'mapbox-gl/dist/mapbox-gl.css';
const token = "sk.eyJ1IjoiaGFuZWF3YSIsImEiOiJjbHdvZGM5N3IxN20wMmlzMWljb2oyaGM5In0.7tEDKeGFgKlhtRTv64-xNA";
const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
  });
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (map) {
      map.on('click', (e) => {
        setMarker({
          latitude: e.lngLat.lat,
          longitude: e.lngLat.lng,
        });
      });
    }
  }, [map]);

  return (
    <div className="map-container">
      <Map
        style={{ width: 800, height: 600 }}
        containerStyle={{ height: '100%', width: '100%' }}
        mapboxAccessToken={token}
        zoom={[12]}
        center={[marker.longitude, marker.latitude]}
        onMapLoad={(map) => setMap(map)}
      >
        <Marker
          coordinates={[marker.longitude, marker.latitude]}
          anchor="bottom"
        >
          {popup && (
            <Popup
              coordinates={[marker.longitude, marker.latitude]}
              onClose={() => setPopup(false)}
            >
              <div>
                <h2>Marker</h2>
                <p>Latitude: {marker.latitude}</p>
                <p>Longitude: {marker.longitude}</p>
              </div>
            </Popup>
          )}
        </Marker>
      </Map>
    </div>
  );
};

export default MapComponent;