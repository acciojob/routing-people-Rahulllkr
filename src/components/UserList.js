import React from "react";
import { Link } from "react-router-dom";

const names = [
  "Leanne Graham",
  "Ervin Howell",
  "Clementine Bauch",
  "Patricia Lebsack",
  "Chelsey Dietrich",
  "Mrs. Dennis Schulist",
  "Clementina DuBuque",
];

const UserList = () => {
  return (
    <div>
      <h1>User List</h1>
      {names.map((uName, index) => {
        return (
          <div key={index}>
            <Link to={`/users/${index + 1}`}>
              <p>{uName}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
