// Profile.jsx
import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="container py-5">
      <h2>Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Profile;
