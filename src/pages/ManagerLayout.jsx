import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

function ManagerLayout() {
  return (
    <div className="bg-primary text-secondary">
      <div className="fixed top:0 w-full z-20 ">
        <Header></Header>
      </div>

      <div className="pt-16 w-full px-2 md:px-10 ">
        <Outlet />
      </div>
    </div>
  );
}

export default ManagerLayout;
