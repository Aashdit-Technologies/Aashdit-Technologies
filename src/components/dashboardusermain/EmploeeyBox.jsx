import React from "react";
import Button from '@mui/material/Button';

import {
  MdEdit,
  MdDeviceHub,
  MdSmartphone,
  MdMail,
  MdCalendarToday,
  MdFingerprint,
  MdWebAsset,
  MdBloodtype,
  MdBuild 
} from "react-icons/md";
import "../css/DashboardAllCss.css";
import Girl2 from "../../images/girl2.jpg";

const EmploeeyBox = () => {
  return (
    <>
      <div className="col-md-4 mt-4">
        <div className="emp-details">
          <div className="card text-black mb-3">
            <div className="card-header"></div>
            <div className="card-body">
              <div className="con d-flex">
                <div className="img">
                  <img src={Girl2} alt="Employee" />
                </div>
                <div className="imgcon">
                  <h5>Ananya Das</h5>
                  <p>EMP0003588</p>
                </div>
              </div>
              <div className="row">
                <div className="card-body-detail">
                  <ul>
                    <li>
                      <MdDeviceHub color="#535353" />
                      <strong>Department: </strong>
                      <span>UI/UX Developer</span>
                    </li>
                    <li>
                      <MdSmartphone color="#535353" />
                      <strong>Mobile No.: </strong>
                      <span>+91 - 81785 88835</span>
                      <a href="#">Verify</a>
                    </li>
                    <li>
                      <MdMail color="#535353" />
                      <strong>Email ID: </strong>
                      <span>abc@aashdit.com</span>
                    </li>
                    <li>
                      <MdCalendarToday color="#535353" />
                      <strong>DOB: </strong>
                      <span>01-08-1995</span>
                    </li>
                    <li>
                      <MdFingerprint color="#535353" />
                      <strong>Aadhar No.: </strong>
                      <span>32XXXXXXXX355</span>
                    </li>
                    <li>
                      <MdWebAsset color="#535353" />
                      <strong>PAN No.: </strong>
                      <span>IBTXXXXXXXX19</span>
                    </li>
                    <li>
                      <MdBloodtype color="#535353" />
                      <strong>Blood Group: </strong>
                      <span>B+</span>
                    </li>
                  </ul>
                  <div style={{width:"100%", textAlign:"center"}}>
                    <Button variant="contained" >
                        <a href="/" style={{color:"#fff"}}>
                            <MdBuild  color="#fff" /> See More
                        </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="notes">
            <div className="card">
              <div className="card-body">
                <h4>Quick Notes</h4>
                <textarea
                  className="form-control"
                  placeholder="To make quick notes, type here..."
                  rows="6"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmploeeyBox;
