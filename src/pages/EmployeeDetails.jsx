import React, { useState } from 'react'
import "../pages/all.css"
import BasicDetails from './BasicDetails';
import BankDetails from './BankDetails';
import ExperienceDetails from './ExperienceDetails';
import EducationDetails from './EducationDetails';
const EmployeeDetails = () => {
  const [selectedSection, setSelectedSection] = useState('basicDetails');
  const handleNextSection = () => {
    if (selectedSection === 'basicDetails') setSelectedSection('bankDetails');
    else if (selectedSection === 'bankDetails') setSelectedSection('experienceDetails');
    else if (selectedSection === 'experienceDetails') setSelectedSection('educationDetails');
};
  return (
    // <div class="container">
    // <div class="main-contents mt-3 p-3 pb-0 mb-4">
    //     <div class="row pb-3">
    //         <div class="profile_besic d-flex justify-content-between align-items-center">
    //             <div class="profile_besic_item gap-2">
    //                 <span class="material-symbols-outlined">
    //                     subject
    //                     </span><h5>Employee Profile</h5>
    //             </div>
    //             <div class="profile_besic_item">
    //                 <p class="text-danger">Fields marked with ( * ) are mandatoty</p>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="row mt-3 mb-3 tab-section">
          
    //             <div className="button-group d-flex justify-content-start">
    //                         <button className={`btn btn-outline-primary custom-button me-2 ${selectedSection === 'basicDetails' ? 'active' : ''}`} onClick={() => setSelectedSection('basicDetails')}>Basic Details</button>
    //                         <button className={`btn btn-outline-primary custom-button me-2 ${selectedSection === 'bankDetails' ? 'active' : ''}`} onClick={() => setSelectedSection('bankDetails')}>Bank and Address Details</button>
    //                         <button className={`btn btn-outline-primary custom-button me-2 ${selectedSection === 'experienceDetails' ? 'active' : ''}`} onClick={() => setSelectedSection('experienceDetails')}>Previous Experience</button>
    //                         <button className={`btn btn-outline-primary custom-button ${selectedSection === 'educationDetails' ? 'active' : ''}`} onClick={() => setSelectedSection('educationDetails')}>Education Details</button>
    //                     </div>
    //                     <div className="section-content mt-4">
    //                         {selectedSection === 'basicDetails' && <BasicDetails onSave={handleNextSection} />}
    //                         {selectedSection === 'bankDetails' && <BankDetails onSave={handleNextSection} />}
    //                         {selectedSection === 'experienceDetails' && <ExperienceDetails onSave={handleNextSection} />}
    //                         {selectedSection === 'educationDetails' && <EducationDetails />}
    //                     </div>
    //             </div>
    //         </div>
    //     </div>

    <div className="container mt-4">
    <div className="main-contents mt-3 p-3 pb-0 mb-4">
    <div class="row pb-3">
             <div class="profile_besic d-flex justify-content-between align-items-center">
                 <div class="profile_besic_item gap-2">
                     <span class="material-symbols-outlined">
                         subject
                         </span><h5>Employee Profile</h5>
                 </div>
                 <div class="profile_besic_item">
                     <p class="text-danger">Fields marked with ( * ) are mandatoty</p>
                 </div>
           </div>
         </div>

        <div className="card-body">
        <div class="row mt-3 mb-3 tab-section">
        <div class="col-12">
           <div class="tab-bg">
                <button className={`btn btn-primary custom-button  me-2 ${selectedSection === 'basicDetails' ? 'btn-active' : ''}`} onClick={() => setSelectedSection('basicDetails')}>Basic Details</button>
                <button className={`btn btn-primary custom-button me-2 ${selectedSection === 'bankDetails' ? 'btn-active' : ''}`} onClick={() => setSelectedSection('bankDetails')}>Bank and Address Details</button>
                <button className={`btn btn-primary custom-button me-2 ${selectedSection === 'experienceDetails' ? 'btn-active' : ''}`} onClick={() => setSelectedSection('experienceDetails')}>Previous Experience</button>
                <button className={`btn btn-primary custom-button ${selectedSection === 'educationDetails' ? 'btn-active' : ''}`} onClick={() => setSelectedSection('educationDetails')}>Education Details</button>
            </div>
            </div>
            <div className="section-content mt-4">
                {selectedSection === 'basicDetails' && <BasicDetails onSave={handleNextSection} />}
                {selectedSection === 'bankDetails' && <BankDetails onSave={handleNextSection} />}
                {selectedSection === 'experienceDetails' && <ExperienceDetails onSave={handleNextSection} />}
                {selectedSection === 'educationDetails' && <EducationDetails />}
            </div>
            </div>
            </div>
            </div>
        </div>
  
       
  )
}

export default EmployeeDetails
