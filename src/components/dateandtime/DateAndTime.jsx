import React, { useEffect, useState } from 'react'
import {  FaCalendarAlt } from "react-icons/fa";

const DateAndTime = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
        const updateDateTime = () => {
          const currentDateObj = new Date();
    
          // Format date as dd/mm/yyyy
          const day = String(currentDateObj.getDate()).padStart(2, '0');
          const month = String(currentDateObj.getMonth() + 1).padStart(2, '0');
          const year = currentDateObj.getFullYear();
          setCurrentDate(`${day}/${month}/${year}`);
    
          // Format time as hh:mm AM/PM
          let hours = currentDateObj.getHours();
          let minutes = String(currentDateObj.getMinutes()).padStart(2, '0');
          let period = "AM";
          
          if (hours >= 12) {
            period = "PM";
            if (hours > 12) hours -= 12;
          }
          if (hours === 0) hours = 12; // Handle midnight case
    
          setCurrentTime(`${hours}:${minutes} ${period}`);
        };
    
        // Initial date and time update
        updateDateTime();
    
        // Set interval to update time every minute
        const intervalId = setInterval(updateDateTime, 60000);
    
        // Cleanup on component unmount
        return () => clearInterval(intervalId);
      }, []);
    
  return (
    <>
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
                        {currentDate}
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
                        {currentTime}
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default DateAndTime