import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "../css/DashboardAllCss.css";
import Header from "../sidebarheader/Header";
import DashboardHome from "../dashboardusermain/DashboardHome";

const DashboardAll = () => {
  return (
    <>
      <div className="wrapper">
        <div className="main d-flex position-relative">
          <Sidebar />
          <div className="main-content">
            <div className="container-fluid">
              <Header />
              <DashboardHome />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAll;
