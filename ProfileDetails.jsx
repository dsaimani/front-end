import React from "react";
import { useParams } from "react-router-dom";

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="container mt-4">
      <h2>{profile.name}'s Details</h2>
      <img src={profile.photo} alt={profile.name} className="img-fluid mb-3" />
      <p>{profile.description}</p>
      <p><strong>Address:</strong> {profile.address}</p>
    </div>
  );
};

export default ProfileDetails;
