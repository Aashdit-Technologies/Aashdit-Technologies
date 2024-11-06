import * as React from "react";
import { HiLightBulb } from "react-icons/hi";
import { RxDragHandleDots2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import Button from "@mui/joy/Button";
import { FaIdBadge, FaCalendarAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="hedr_main">
          <div className="row">
            <div className="hedr_main_wish">
              <h3>
                Good Morning, <span>Ananya Das!</span>
              </h3>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="hedr_main_box d-flex justify-content-between gap-3 align-items-center">
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
                  <li style={{ borderLeft: "1px solid #D1D1D1" }}>
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
                    <Button color="danger" variant="plain">
                      Dismiss
                    </Button>
                  </li>
                  <li></li>
                </ul>
                <div className="hedr_main_btn">
                  <Button
                    variant="outlined"
                    style={{ fontSize: "12px", padding: "2px 8px" }}
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
                      gap: "9px",
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
                      <div>
                        <div style={{ fontSize: "10px", color: "#888888" }}>
                          CURRENT ROLE
                        </div>
                        <div
                          style={{
                            fontSize: "11px",
                            fontWeight: "bold",
                            color: "#007bff",
                            textTransform:"capitalize"

                          }}
                        >
                          associate software engineer(Project Delivery)
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        height: "40px",
                        width: "1px",
                        backgroundColor: "#e0e0e0",
                      }}
                    />

                    {/* Date and Time Section */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <FaCalendarAlt size={20} style={{ color: "#909090" }} />
                      <div>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          22/10/2024
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "white",
                            backgroundColor: "#007bff",
                            padding: "2px 8px",
                            borderRadius: "8px",
                            marginTop: "2px",
                            display: "inline-block",
                          }}
                        >
                          05:35 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
