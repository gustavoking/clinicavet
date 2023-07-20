import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Private from "./Private";
import Profile from "../pages/Profile";
import Animais from "../pages/Animais";
import Edit from "../pages/Edit";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route
        path="/dashboard"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />
      <Route
        path="/profile"
        element={
          <Private>
            <Profile />
          </Private>
        }
      />
      <Route
        path="/animais"
        element={
          <Private>
            <Animais />
          </Private>
        }
      />
      <Route
        path="/edit"
        element={
          <Private>
            <Edit />
          </Private>
        }
      />
    </Routes>
  );
}

export default RoutesApp;
