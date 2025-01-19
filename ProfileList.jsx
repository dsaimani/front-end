import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileList = ({ profiles }) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h2>Profile List</h2>
      <div className="row">
        {profiles.map((profile) => (
          <div key={profile.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={profile.photo} alt={profile.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <p className="card-text">{profile.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/profile/${profile.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
