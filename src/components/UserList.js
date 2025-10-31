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
      <ul>
        {names.map((uName, index) => (
          <li key={index}>
            <Link to={`/users/${index + 1}`}>{uName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
