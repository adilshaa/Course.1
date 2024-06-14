import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ManagerLayout from "../pages/ManagerLayout";
import Test from "../pages/attent";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ManagerLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/attent" element={<Test />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;
