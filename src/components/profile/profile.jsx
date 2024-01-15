import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
    <ul className="stats">
      {Object.entries(stats).map(([key, value]) => (
        <li key={key}>
          <span className="label">{key}</span>
          <span className="quantity">{value}</span>
        </li>
      ))}
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
