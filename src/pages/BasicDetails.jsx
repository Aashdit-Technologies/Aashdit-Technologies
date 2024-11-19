import React, { useEffect, useState } from 'react'
import "./all.css"
import EditIcon from '@mui/icons-material/Edit';
import Info from '@mui/icons-material/Info';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import api from '../Api/api'
import useAuthStore from "../store/Store";

export default function BasicDetails() {

    const [basicDetails, setBasicDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [profileImage, setProfileImage] = useState('./Mask group.png');
    const token = useAuthStore((state) => state.token);

    useEffect(() => {
        if (token) {
          const fetchBasicDetails = async () => {
            try {
              const response = await api.get("/_$EmployeeDetails");
              console.log("Full API Response:", response.data); 
                setBasicDetails(response.data.data.empMaster); 
            } catch (error) {
              console.error("Error fetching data:", error.response || error.message);
              setError(error.response?.data?.message || "Failed to fetch data");
            } finally {
              setLoading(false);
            }
          };
          fetchBasicDetails();
        } else {
          setLoading(false);
          setError("Token is missing or invalid.");
        }
      }, [token]);
      


    const [rows, setRows] = useState([
        {
          office: '',
          department: '',
          section: '',
          role: '',
          primary: '',
          accessLevel: '',
          fromDate: null,
          toDate: null,
          status: '',
        },
      ]);
    

      const handleAddRow = () => {
        setRows([
          ...rows,
          {
            office: '',
            department: '',
            section: '',
            role: '',
            primary: '',
            accessLevel: '',
            fromDate: null,
            toDate: null,
            status: '',
          },
        ]);
      };
    

      const handleRemoveRow = (index) => {
        setRows(rows.filter((_, i) => i !== index));
      };
    

      const handleInputChanges = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
      };

  return (
    <div>
     <div class="container">
        <div class="row">
            <div class="col-12 basic-heading pt-3 pb-3">
                <h4>Basic Details </h4>
            </div>
        </div>
      <div className="d-flex justify-content-center align-items-center my-3">
      <div className="border rounded p-3 bg-light w-100">
        <div className="text-center">
          <div className="profile-pic">
            <img src={profileImage} alt="" className="rounded-circle" width="100" height="100" />
            <input
              type="file"
              id="imageUpload"
              style={{ display: 'none' }}
              accept="image/*"
            //   onChange={handleImageChange}
          
            />
          </div>
          <span
            className="edit-btn"
            onClick={() => document.getElementById('imageUpload').click()}
          >
            <EditIcon className="edit-icon" /> Edit
          </span>
        </div>
        <div className="info-text">
          <Info className="info-icon" />
          <small className="text-muted">
            jpg/jpeg/png/pdf restrictions only. Maximum upload size 2MB
          </small>
        </div>
      </div>
    </div>

        <form action="">
            <div class="row mt-5 mb-4 besic-form">
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Employee Name <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                            <input
                                type="text"
                                id="employeeName"
                                className="form-control"
                                value={basicDetails?.employeeName || ""} />
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Employee Code <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                            <input
                                type="text"
                                id="employeeCode"
                                className="form-control"
                                value={basicDetails?.employeeCode|| ""} />
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Father / Husband  Name <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                            <input
                                type="text"
                                id="fatherName"
                                className="form-control"
                               value={basicDetails?.fatherName|| ""} />
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Gender <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                            <input
                                type="text"
                                id="gender"
                                className="form-control"
                               value={basicDetails?.gender || ""} />
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Date of Birth <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Date of Joining <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Mobile No. <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Alternate Mobile No.</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Employee Contact <br/>No.. <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Office eMail <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Alternate eMail<sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Aadhar No. <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">PAN No. <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">PF Account No.</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">UAN No. </label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Nationality</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Religion</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Category</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Blood Group <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Marital Status</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Date of Marriage</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Languages Known</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Passport No.</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class="" />
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Passport Expiry Date</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Employee Type</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Service Status</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class="" />
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Service End Date</label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Aadhaar Card Copy <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="file" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">PAN Card Copy <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="file" class=""/>
                    </div>
                </div>
            </div>
        </form>
        <div class="row mb-3">
            <div class="col-12 basic-heading1 pt-3 pb-3">
                <h4>Employee Role Mapping</h4>
            </div>
        </div>
        <div class="row roleMapingTable mb-5">
            <div class="col-12">
            <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Office</th>
            <th>Department</th>
            <th>Section</th>
            <th>Designation/Role</th>
            <th>Primary?</th>
            <th>Access Level</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Status</th>
            <th>  <button type="button" className="  btn btn-success" onClick={handleAddRow}> <span class="material-symbols-outlined">
                                                add
                                            </span></button></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td><input type="text" className="form-control" value={row.office} onChange={(e) => handleInputChanges(index, 'office', e.target.value)} /></td>
              <td><input type="text" className="form-control" value={row.department} onChange={(e) => handleInputChanges(index, 'department', e.target.value)} /></td>
              <td><input type="text" className="form-control" value={row.section} onChange={(e) => handleInputChanges(index, 'section', e.target.value)} /></td>
              <td><input type="text" className="form-control" value={row.role} onChange={(e) => handleInputChanges(index, 'role', e.target.value)} /></td>
              <td><input type="text" className="form-control" value={row.primary} onChange={(e) => handleInputChanges(index, 'primary', e.target.value)} /></td>
              <td><input type="text" className="form-control" value={row.accessLevel} onChange={(e) => handleInputChanges(index, 'accessLevel', e.target.value)} /></td>
              <td>
                <DatePicker
                  selected={row.fromDate}
                  onChange={(date) => handleInputChanges(index, 'fromDate', date)}
                  className="form-control"
                
                />
              </td>
              <td>
                <DatePicker
                  selected={row.toDate}
                  onChange={(date) => handleInputChanges(index, 'toDate', date)}
                  className="form-control"
                 
                />
              </td>
              <td><input type="text" className="form-control" value={row.status} onChange={(e) => handleInputChanges(index, 'status', e.target.value)} /></td>
              <td>
                <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow(index)}><span class="material-symbols-outlined">
                                                remove
                                            </span></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
        
            </div>
        </div>
        <div class="row justify-content-center mt-4 bg-light p-3">
            <a href="#" class=" saveDetails">SAVE DETAILS</a>
        </div>
    </div>
      </div> 

  )
}

