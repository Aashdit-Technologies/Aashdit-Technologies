import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import '../css/DashboardAllCss.css'
import {  BrowserRouter as Router  } from 'react-router-dom'
import Header from '../sidebarheader/Header'

const DashboardAll = () => {
  return (
    <>
        <div className="wrapper">
            <div className="container-fluid p-0 m-0">
                <div className="row">
                    <div className="col-lg-2 colmd-2">
                        <Router>


                        <Sidebar/>
                        </Router>
                    </div>
                    <div className="col-lg-10 col-md-10">
                        <Header/>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default DashboardAll