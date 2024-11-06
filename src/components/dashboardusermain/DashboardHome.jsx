import React from 'react'
import EmploeeyBox from './EmploeeyBox'
import RightSideBar from './RightSideBar'


const DashboardHome = () => {
  return (
    <>
      <div className="dashbdhome">
        <div className="container-fluid">
          <div className="row">
            <EmploeeyBox />
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHome