import React, { useState } from "react";
import "./all.css";

export default function EducationDetails() {
  const [educationRows, setEducationRows] = useState([
    { standard: "", institution: "", board: "", stream: "", passingYear: "", totalMarks: "", certificateFile: null },
  ]);

  const [certificationRows, setCertificationRows] = useState([
    { certificateName: "", duration: "", certificateFile: null },
  ]);

  // Handle input changes for both education and certification rows
  const handleInputChange = (index, field, value, type) => {
    if (type === "education") {
      const updatedRows = [...educationRows];
      updatedRows[index][field] = value;
      setEducationRows(updatedRows);
    } else if (type === "certification") {
      const updatedRows = [...certificationRows];
      updatedRows[index][field] = value;
      setCertificationRows(updatedRows);
    }
  };

  // Add a new education row
  const addEducationRow = () => {
    setEducationRows([
      ...educationRows,
      { standard: "", institution: "", board: "", stream: "", passingYear: "", totalMarks: "", certificateFile: null },
    ]);
  };

  // Remove an education row
  const removeEducationRow = (index) => {
    const updatedRows = educationRows.filter((_, i) => i !== index);
    setEducationRows(updatedRows);
  };

  // Add a new certification row
  const addCertificationRow = () => {
    setCertificationRows([
      ...certificationRows,
      { certificateName: "", duration: "", certificateFile: null },
    ]);
  };

  // Remove a certification row
  const removeCertificationRow = (index) => {
    const updatedRows = certificationRows.filter((_, i) => i !== index);
    setCertificationRows(updatedRows);
  };

  return (
    <div className="container">
      <form className="besic-form">
        <div className="row">
          <div className="col-12 basic-heading pt-3 pb-3 mb-3">
            <h4>Education Details</h4>
          </div>
        </div>

        <div className="row roleMapingTable mb-5">
          <div className="col-12">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Standard <span className="star-icon">*</span></th>
                  <th>Institution Name <span className="star-icon">*</span></th>
                  <th>Board Name <span className="star-icon">*</span></th>
                  <th>Stream <span className="star-icon">*</span></th>
                  <th>Passing Year <span className="star-icon">*</span></th>
                  <th>Total Marks/CGPA Obtained <span className="star-icon">*</span></th>
                  <th>Upload/View Certificate <span className="star-icon">*</span></th>
                  <th className="text-center">
                    <button type="button" className="btn btn-success" onClick={addEducationRow}><span class="material-symbols-outlined">
                                                add
                                            </span></button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {educationRows.map((row, index) => (
                  <tr key={index}>
                    <td><input type="text" className="form-control" value={row.standard} onChange={(e) => handleInputChange(index, 'standard', e.target.value, 'education')} required /></td>
                    <td><input type="text" className="form-control" value={row.institution} onChange={(e) => handleInputChange(index, 'institution', e.target.value, 'education')} required /></td>
                    <td><input type="text" className="form-control" value={row.board} onChange={(e) => handleInputChange(index, 'board', e.target.value, 'education')} required /></td>
                    <td><input type="text" className="form-control" value={row.stream} onChange={(e) => handleInputChange(index, 'stream', e.target.value, 'education')} required /></td>
                    <td><input type="number" className="form-control" value={row.passingYear} onChange={(e) => handleInputChange(index, 'passingYear', e.target.value, 'education')} required /></td>
                    <td><input type="text" className="form-control" value={row.totalMarks} onChange={(e) => handleInputChange(index, 'totalMarks', e.target.value, 'education')} required /></td>
                    <td>
                      <input type="file" className="form-control" onChange={(e) => handleInputChange(index, 'certificateFile', e.target.files[0], 'education')} required />
                    </td>
                    <td className="text-center">
                      <button type="button" className="btn btn-danger" onClick={() => removeEducationRow(index)}><span class="material-symbols-outlined">
                                                remove
                                            </span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-12 basic-heading pt-3 pb-3 mb-3">
            <h4>Certification Details</h4>
          </div>
        </div>

        <div className="row roleMapingTable mb-5">
          <div className="col-12">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Certificate Name <span className="star-icon">*</span></th>
                  <th>Duration (In Months) <span className="star-icon">*</span></th>
                  <th>Upload Certificate <span className="star-icon">*</span></th>
                  <th className="text-center">
                    <button type="button" className="btn btn-success" onClick={addCertificationRow}><span class="material-symbols-outlined">
                                                add
                                            </span></button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {certificationRows.map((row, index) => (
                  <tr key={index}>
                    <td><input type="text" className="form-control" value={row.certificateName} onChange={(e) => handleInputChange(index, 'certificateName', e.target.value, 'certification')} required /></td>
                    <td><input type="number" className="form-control" value={row.duration} onChange={(e) => handleInputChange(index, 'duration', e.target.value, 'certification')} required /></td>
                    <td>
                      <input type="file" className="form-control" onChange={(e) => handleInputChange(index, 'certificateFile', e.target.files[0], 'certification')} required />
                    </td>
                    <td className="text-center">
                      <button type="button" className="btn btn-danger" onClick={() => removeCertificationRow(index)}><span class="material-symbols-outlined">
                                                remove
                                            </span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="row justify-content-center mt-4 bg-light p-3">
          <button type="button" className="saveDetails">SAVE DETAILS</button>
        </div>
      </form>
    </div>
  );
}
