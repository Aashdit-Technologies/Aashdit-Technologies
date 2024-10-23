import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import '../css/DashboardAllCss.css'
import {  BrowserRouter as Router  } from 'react-router-dom'

const DashboardAll = () => {
  return (
    <>
        <div className="wrapper">
            <div className="container-fluid p-0 m-0">
                <div className="row">
                    <div className="col-lg-3 colmd-3">
                        <Router>


                        <Sidebar/>
                        </Router>
                    </div>
                    <div className="col-lg-9 col-md-9"></div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default DashboardAll