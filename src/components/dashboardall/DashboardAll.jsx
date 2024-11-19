import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "../css/DashboardAllCss.css";
import Header from "../sidebarheader/Header";
import { Outlet } from "react-router-dom";

const DashboardAll = () => {
  return (
    <>
        <div className="main d-flex position-relative">
          <div className="main_dashboard" style={{background:"#E4EAFF"}}>
            <Sidebar />
            <div className="main-content">
              <div className="container-fluid">
                <Header />
                {/* <DashboardHome /> */}
                <Outlet/>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default DashboardAll;
