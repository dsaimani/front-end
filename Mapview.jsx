import React from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapView = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) return <div>Profile not found</div>;

  const containerStyle = { width: "100%", height: "400px" };
  const center = { lat: 37.7749, lng: -122.4194 }; // Example coordinates

  return (
    <div className="container mt-4">
      <h2>{profile.name}'s Location</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapView;
