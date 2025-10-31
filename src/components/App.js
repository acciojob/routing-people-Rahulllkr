
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UsersList from "./UsersList";




const App = () => {
const names = [
  "Leanne Graham",
  "Ervin Howell",
  "Clementine Bauch",
  "Patricia Lebsack",
  "Chelsey Dietrich",
  "Mrs. Dennis Schulist",
  "Clementina DuBuque"
];
  return (
    <BrowserRouter>
    <div>
        {/* Do not remove the main div */}
        <h1>User List</h1>
        <div>
          {
          names.map((uName,index) => {
            return <div key={index}><Link to={`/users/${index+1}`}><p>{uName}</p></Link></div>
          })
        }
        <Routes>
          <Route path="/users/:num" element={<UsersList />}/>
        </Routes>
        </div>

    </div>
    </BrowserRouter>
  )
}

export default App
