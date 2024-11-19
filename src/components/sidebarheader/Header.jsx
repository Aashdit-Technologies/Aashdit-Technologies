import React, { useState, useEffect } from "react";
import { HiLightBulb } from "react-icons/hi";
import { RxDragHandleDots2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import Button from "@mui/joy/Button";
import { FaIdBadge } from "react-icons/fa";
import useAuthStore from "../../store/Store";
import api from "../../Api/api";
import DateAndTime from "../dateandtime/DateAndTime";

const Header = () => {
  const setData = useAuthStore((state) => state.setData); // Zustand setData function
  const data = useAuthStore((state) => state.data); // Zustand data state
  const token = useAuthStore((state) => state.token);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const response = await api.get("/welcome");
          console.log(response.data.data);
          setData(response.data.data); // Update Zustand global state
        } catch (error) {
          setError(error.response?.data?.message || "Failed to fetch data");
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setLoading(false);
      setError("Token is missing or invalid.");
    }
  }, [token, setData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="hedr_main">
        <div className="row">
          <div className="hedr_main_wish">
            <h3>
              Good Morning, <span>{data?.empMasterView?.employeeName}</span>
            </h3>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="hedr_main_box d-flex gap-2 align-items-center justify-content-between">
              <ul>
                <li>
                  <HiLightBulb
                    style={{
                      color: "#EEC213",
                      fontSize: "22px",
                      rotate: "18deg",
                    }}
                  />{" "}
                  <span>REMINDER</span>
                </li>
                <li>
                  <RxDragHandleDots2 />
                </li>
                <li>
                  <p>Integration of Fund Management Project</p>
                </li>
                <li className="breakLi">
                  <p
                    style={{
                      color: "var(--green-color)",
                      paddingLeft: "10px",
                    }}
                  >
                    Mark as Complete
                  </p>
                </li>
                <li>
                  <a href="#" class="dismiss" variant="plain">
                    Dismiss
                  </a>
                </li>
              </ul>
              <div className="hedr_main_btn">
                <Button
                  variant="outlined"
                  style={{
                    fontSize: "12px",
                    padding: "2px 8px",
                    borderRadius: "12px",
                  }}
                >
                  <FaPlus /> ADD REMINDER
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "fit-content",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "Arial, sans-serif",
                    marginLeft: "auto",
                  }}
                >
                  {/* Role Section */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <FaIdBadge size={20} style={{ color: "#909090" }} />
                    <div class="breakRole" style={{ paddingLeft: "10px" }}>
                      <div style={{ fontSize: "10px", color: "#888888" }}>
                        CURRENT ROLE
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          color: "#007bff",
                          textTransform: "capitalize",
                        }}
                      >
                        {data?.empMasterView?.empDesgnName} (
                        {data?.empMasterView?.departmentName})
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
              {/* Date and Time Section */}
              <DateAndTime />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
