import React from "react";

function Player({ avatarUrl, name }) {
  return (
    <div className="user">
      <span>{name}</span>
      <img
        className="avatar"
        src="../public/avatar/user.jpeg"
        alt="Your code User avatar"
      />
    </div>
  );
}

export default Player;
