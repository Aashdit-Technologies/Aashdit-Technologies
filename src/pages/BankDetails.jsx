import React from 'react'
import "./all.css"
export default function BankDetails() {
    
  return (
    <div>
       <div class="container">
 
        <form action="" class="besic-form  mb-5">
            <div class="row">
                <div class="col-12 basic-heading pt-3 pb-3">
                    <h4>Bank Details</h4>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Account No. <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class="" />
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Bank <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4"></div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Branch Name <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">IFSC <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4"></div>
            </div>
            <div class="row">
                <div class="col-12 basic-heading basic-heading2 pt-3 pb-3">
                    <h4>Address Details</h4>
                </div>
            </div>
            <div class="row">
                <h6>Present Address</h6>
            </div>
            <div class="row mt-3">
                <div class="col-8">
                    <div class="form-group">
                        <label for="" class="form-label" style={{width: "19%"}}>Address <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <textarea name="" id=""></textarea>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">City <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                            <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Pincode <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">District <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">State <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
            </div>
            <div class="row mt-3 mb-4">
                <div class="col-6">
                    <div class="form-group">
                                <h6 style={{width: "25%"}}>Permanent Address</h6>
                        <input type="checkbox" style={{width: "5%",height: "20px"}}/>
                        <span class="material-symbols-outlined" style={{width: "auto"}}>
                            drag_indicator
                            </span>
                        <p>Permanent address is same as present address</p>
                    </div>
                </div>
                <div class="col-1 text-start">
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <div class="form-group">
                        <label for="" class="form-label" style={{width: "19%"}}>Address <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <textarea name="" id=""></textarea>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">City <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                            <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">Pincode <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">District <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="" class="form-label">State <sup>*</sup></label>
                        <span class="material-symbols-outlined">
                            drag_indicator
                            </span>
                        <input type="text" class=""/>
                    </div>
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
