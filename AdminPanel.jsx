import React, { useState } from "react";

const AdminPanel = ({ profiles, setProfiles }) => {
  const handleAddProfile = () => {
    const newProfile = {
      id: profiles.length + 1,
      name: "New User",
      photo: "https://via.placeholder.com/150",
      description: "New Description",
      address: "New Address",
    };
    setProfiles([...profiles, newProfile]);
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>
      <button className="btn btn-success mb-3" onClick={handleAddProfile}>
        Add Profile
      </button>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>{profile.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
