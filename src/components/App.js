import React from "react";
import "./../styles/App.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import UsersList from "./UserList";
import UserDetail from "./UserDetail";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Do not remove the main div */}
        <Routes>
          <Route path="/" element={<UserDetail />} />
          <Route path="/users/:num" element={<UsersList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
