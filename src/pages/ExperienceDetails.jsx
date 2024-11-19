import React, { useState } from 'react'
import "./all.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export default function ExperienceDetails() {
    const [rows, setRows] = useState([
        {
            orgName: '',
            location: '',
            position: '',
            fromDate: null,
            tillDate: null,
            experienceFile: null,
            relievingFile: null,
        },
      ]);
    
      const handleAddRow = () => {
        setRows([
          ...rows,
          {
      orgName: '',
      location: '',
      position: '',
      fromDate: null,
      tillDate: null,
      experienceFile: null,
      relievingFile: null,
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
  
        <form action="" class="besic-form  mb-5">
            <div class="row">
                <div class="col-12 basic-heading pt-3 pb-3 mb-3">
                    <h4>Previous Experience</h4>
                </div>
            </div>
            <div class="row roleMapingTable mb-5">
                <div class="col-12">
                <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Organization Name <span className='star-icon'>*</span></th>
            <th>Work Location <span className='star-icon'>*</span></th>
            <th>Position Held <span className='star-icon'>*</span></th>
            <th>From Date <span className='star-icon'>*</span></th>
            <th>Till Date <span className='star-icon'>*</span></th>
            <th>Upload/View Experience Letter <span className='star-icon'>*</span></th>
            <th>Upload/View Relieving Letter <span className='star-icon'>*</span></th>
            <th className="text-center">
              <button type="button" className="btn btn-success" onClick={handleAddRow}>
              <span class="material-symbols-outlined">
                                                add
                                            </span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (

              <tr key={index}>
              <td><input type="text" className="form-control" value={row.orgName} onChange={(e) => handleInputChanges(index, 'orgName', e.target.value)} /></td>
              <td><input type="text" className="form-control" value={row.location} onChange={(e) => handleInputChanges(index, 'location', e.target.value)} /></td>
              <td><input type="text" className="form-control" value={row.position} onChange={(e) => handleInputChanges(index, 'position', e.target.value)} /></td>
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

              <td><input type="file" className="form-control" value={row.experienceFile} onChange={(e) => handleInputChanges(index, 'experienceFile', e.target.value)} /></td>
              <td><input type="file" className="form-control" value={row. relievingFile} onChange={(e) => handleInputChanges(index, ' relievingFile', e.target.value)} /></td>
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
        </form>
        
        <div class="row justify-content-center mt-4 bg-light p-3">
            <a href="#" class="saveDetails">SAVE DETAILS</a>
        </div>
    </div>
     </div>
 
  )
}
