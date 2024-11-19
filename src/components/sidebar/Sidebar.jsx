
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import useAuthStore from "../../store/Store";
import api from "../../Api/api";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { 
  DashboardOutlined, 
  ExpandLess, 
  ExpandMore, 
  People, 
  EventAvailable, 
  CalendarToday, 
  AttachMoney, 
  LunchDining 
} from "@mui/icons-material";
import TaskIcon from "@mui/icons-material/Task";
import AssessmentIcon from "@mui/icons-material/Assessment";
import "./sidebar.css";
import useLogout from "./useLogout";

const Sidebar = () => {
  const [menuData, setMenuData] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const logout = useLogout();
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const response = await api.get("/fetchMenuUrl");
          setMenuData(response.data.data || []);
        } catch (error) {
          setError(error.response?.data?.message || "Failed to fetch data");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setLoading(false);
      setError("Token is missing or invalid.");
    }
  }, [token]);

  const handleMenuToggle = (menuId) => {
    setOpenMenu((prev) => (prev === menuId ? null : menuId));
    setOpenSubMenu({});
  };

  const handleSubMenuToggle = (parentMenuId, subMenuId) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [parentMenuId]: prev[parentMenuId] === subMenuId ? null : subMenuId,
    }));
  };

  const iconMapping = {
    "Employee": <People className="menu-icon" />,
    "Attendance": <EventAvailable className="menu-icon" />,
    "Leaves": <CalendarToday className="menu-icon" />,
    "Reimbursements": <AttachMoney className="menu-icon" />,
    "Manage Task": <TaskIcon className="menu-icon" />,
    "Status Report": <AssessmentIcon className="menu-icon" />,
    "Human Resources": <People className="menu-icon" />,
    "Lunch Management": <LunchDining className="menu-icon" />,
  };

  // Helper function to render icons only at main menu and first submenu level
  const getIcon = (menuName, level) => {
    return level < 2 ? iconMapping[menuName] || <People className="menu-icon" /> : null;
  };

  const renderMenu = (menuItems, level = 0) =>
    menuItems.map((item) => (
      <li key={item.menuId} className={`menu-item level-${level}`}>
        {item.subMenu && item.subMenu.length > 0 ? (
          <div className="menu-icon-text" onClick={() => handleMenuToggle(item.menuId)}>
            {getIcon(item.menuName, level)}
            <span className="menu-text">{item.menuName}</span>
            {openMenu === item.menuId ? <ExpandLess className="dropdown-icon" /> : <ExpandMore className="dropdown-icon" />}
          </div>
        ) : (
          <Link to={item.menuURL.replace("_$", "")} className="menu-link">
            <div className="menu-icon-text">
              {getIcon(item.menuName, level)}
              <span className="menu-text">{item.menuName}</span>
            </div>
          </Link>
        )}

        {openMenu === item.menuId && item.subMenu && item.subMenu.length > 0 && (
          <ul className="submenu">
            {item.subMenu.map((subItem) => (
              <li key={subItem.menuId} className="submenu-item">
                {subItem.subMenu && subItem.subMenu.length > 0 ? (
                  <div className="menu-icon-text" onClick={() => handleSubMenuToggle(item.menuId, subItem.menuId)}>
                    {getIcon(subItem.menuName, level + 1)}
                    <span className="menu-text">{subItem.menuName}</span>
                    {openSubMenu[item.menuId] === subItem.menuId ? <ExpandLess className="dropdown-icon" /> : <ExpandMore className="dropdown-icon" />}
                  </div>
                ) : (
                  <Link to={subItem.menuURL.replace("_$", "")} className="menu-link">
                    <span className="menu-text">{subItem.menuName}</span>
                  </Link>
                )}

                {openSubMenu[item.menuId] === subItem.menuId && subItem.subMenu && subItem.subMenu.length > 0 && (
                  <ul className="nested-submenu">
                    {subItem.subMenu.map((nestedSubItem) => (
                      <li key={nestedSubItem.menuId} className="nested-submenu-item">
                        <Link to={nestedSubItem.menuURL.replace("_$", "")} className="menu-link">
                          <span className="menu-text">{nestedSubItem.menuName}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    ));

  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu-item">
          <div className="menu-icon-text d-flex align-items-center">
            <DashboardOutlined className="menu-icon" style={{ fontSize: "14px" }} />
            <Link to="/hrms/" className="menu-link"> 
              Dashboard
            </Link>
          </div>
        </li>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          renderMenu(menuData)
        )}
      </ul>

      <div className="logout_btn">
        <Button variant="outlined" color="error" onClick={logout} style={{ gap: "10px" }}>
          <RiLogoutCircleRLine style={{ fontSize: "20px", transform: "rotate(270deg)" }} />
          LogOut
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
