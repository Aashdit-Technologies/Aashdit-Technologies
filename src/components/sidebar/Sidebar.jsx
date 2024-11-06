import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {
  DashboardOutlined,
  PeopleOutlined,
  DevicesOutlined,
  LunchDiningOutlined,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group"; // Icon for employee type
import "./Sidebar.css";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (menu, e) => {
    e.stopPropagation();
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="sidebar">
      {/* Add Logo */}
      <ul className="menu">
        {/* Dashboard */}
        <li className="menu-item">
          <div className="menu-icon-text">
            <DashboardOutlined
              className="menu-icon"
              style={{ fontSize: "18px" }}
            />
            <Link to="/" className="menu-text">
              Dashboard
            </Link>
          </div>
        </li>

        {/* Human Resources */}
        <li className="menu-item" onClick={(e) => handleToggle("hr", e)}>
          <div className="menu-icon-text">
            <PeopleOutlined
              className="menu-icon"
              style={{ fontSize: "18px" }}
            />
            <span className="menu-text">Human Resources</span>
          </div>
          {openMenus.hr ? (
            <ExpandLess className="dropdown-icon" />
          ) : (
            <ExpandMore className="dropdown-icon" />
          )}
        </li>

        {/* Submenu for Human Resources */}
        {openMenus.hr && (
          <ul className="submenu">
            <li
              className="submenu-item"
              onClick={(e) => handleToggle("employeeProfile", e)}
            >
              <div className="menu-icon-text">
                <GroupIcon
                  className="submenu-icon"
                  style={{ fontSize: "18px" }}
                />
                <span className="menu-text-innr">Employee</span>
              </div>
              {openMenus.employeeProfile ? (
                <ExpandLess className="dropdown-icon" />
              ) : (
                <ExpandMore className="dropdown-icon" />
              )}
            </li>

            {openMenus.employeeProfile && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="/employee-profile/general" className="menu-link">
                    Employee Profile
                  </Link>
                </li>
              </ul>
            )}

            {/* Attendance */}
            <li
              className="submenu-item"
              onClick={(e) => handleToggle("attendance", e)}
            >
              <div className="menu-icon-text">
                <GroupIcon
                  className="submenu-icon"
                  style={{ fontSize: "18px" }}
                />
                <span className="menu-text-innr">Attendance</span>
              </div>
              {openMenus.attendance ? (
                <ExpandLess className="dropdown-icon" />
              ) : (
                <ExpandMore className="dropdown-icon" />
              )}
            </li>

            {openMenus.attendance && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="/attendance/ajay" className="menu-link">
                    Ajay
                  </Link>
                </li>
              </ul>
            )}

            {/* Leaves */}
            <li
              className="submenu-item"
              onClick={(e) => handleToggle("leaves", e)}
            >
              <div className="menu-icon-text">
                <GroupIcon
                  className="submenu-icon"
                  style={{ fontSize: "18px" }}
                />
                <span className="menu-text-innr">Leaves</span>
              </div>
              {openMenus.leaves ? (
                <ExpandLess className="dropdown-icon" />
              ) : (
                <ExpandMore className="dropdown-icon" />
              )}
            </li>

            {openMenus.leaves && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="/leaves/ajay" className="menu-link">
                    Ajay
                  </Link>
                </li>
              </ul>
            )}

            {/* Reimbursements */}
            <li
              className="submenu-item"
              onClick={(e) => handleToggle("reimbursements", e)}
            >
              <div className="menu-icon-text">
                <GroupIcon
                  className="submenu-icon"
                  style={{ fontSize: "18px" }}
                />
                <span className="menu-text-innr">Reimbursements</span>
              </div>
              {openMenus.reimbursements ? (
                <ExpandLess className="dropdown-icon" />
              ) : (
                <ExpandMore className="dropdown-icon" />
              )}
            </li>

            {openMenus.reimbursements && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="/reimbursements/ajay" className="menu-link">
                    Ajay
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        )}

        {/* IT Assets */}
        <li className="menu-item" onClick={(e) => handleToggle("itAssets", e)}>
          <div className="menu-icon-text">
            <DevicesOutlined
              className="menu-icon"
              style={{ fontSize: "18px" }}
            />
            <span className="menu-text">IT Assets</span>
          </div>
          {openMenus.itAssets ? (
            <ExpandLess className="dropdown-icon" />
          ) : (
            <ExpandMore className="dropdown-icon" />
          )}
        </li>

        {openMenus.itAssets && (
          <ul className="submenu">
            <li className="submenu-item">
              <Link to="/it-assets/ajay" className="menu-link">
                Ajay
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/it-assets/pabitra" className="menu-link">
                Pabitra
              </Link>
            </li>
          </ul>
        )}

        {/* Lunch Management */}
        <li
          className="menu-item"
          onClick={(e) => handleToggle("lunchManagement", e)}
        >
          <div className="menu-icon-text">
            <LunchDiningOutlined
              className="menu-icon"
              style={{ fontSize: "18px" }}
            />
            <span className="menu-text">Lunch Management</span>
          </div>
          {openMenus.lunchManagement ? (
            <ExpandLess className="dropdown-icon" />
          ) : (
            <ExpandMore className="dropdown-icon" />
          )}
        </li>

        {openMenus.lunchManagement && (
          <ul className="submenu">
            <li className="submenu-item">
              <Link to="/lunch-management/ajay" className="menu-link">
                Ajay
              </Link>
            </li>
            <li className="submenu-item">
              <Link to="/lunch-management/pabitra" className="menu-link">
                Pabitra
              </Link>
            </li>
          </ul>
        )}
      </ul>
      <div className="logout_btn">
        <Button variant="outlined" color="error" style={{gap:"10px"}}>
          <RiLogoutCircleRLine style={{ fontSize:"20px", rotate:"270deg"}}/>
          LogOut
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
