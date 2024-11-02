import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "../css/DashboardAllCss.css";
import Header from "../sidebarheader/Header";

const DashboardAll = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container-fluid p-0 m-0">
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <Sidebar />
            </div>
            <div className="col-lg-10 col-md-10">
              <Header />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAll;
