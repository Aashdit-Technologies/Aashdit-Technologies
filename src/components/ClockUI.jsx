import React, { useEffect } from "react";
import "../components/css/Clock.css"; 

const ClockUi = () => {
  useEffect(() => {
    const clock = () => {
      const d = new Date();
      const hHand = document.getElementById("hour-hand"),
        mHand = document.getElementById("minute-hand"),
        sHand = document.getElementById("second-hand"),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        hDeg = (h / 12) * 360 + (m / 60) * 30,
        mDeg = (m / 60) * 180 + (s / 60) * 6,
        sDeg = (s / 60) * 360,
        am = document.getElementById("am"),
        pm = document.getElementById("pm"),
        cDate = document.querySelector(".date"),
        date = d.getDate(),
        mNo = d.getMonth(),
        year = d.getFullYear(),
        day = d.getDay();

      // Hand rotations
      hHand.style.transform = `rotate(${hDeg}deg)`;
      mHand.style.transform = `rotate(${mDeg}deg)`;
      sHand.style.transform = `rotate(${sDeg}deg)`;

      // AM/PM switching
      let highLight = "#1affff";
      if (h < 12) {
        am.style.color = highLight;
        pm.style.color = "inherit";
      } else {
        pm.style.color = highLight;
        am.style.color = "inherit";
      }

      // Current date
      const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];

      cDate.innerHTML = `${weeks[day]} ${months[mNo]} ${date}, ${year}`;
    };

    const interval = setInterval(clock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      {/* AM or PM */}
      <div className="a-p-switch">
        <span id="am"><b>AM</b></span>
        <span id="pm"><b>PM</b></span>
      </div>

      {/* Current Date */}
      <div className="date"></div>

      {/* Hour lines and numbers */}
      <div className="hour-lines">
        {Array.from({ length: 6 }, (_, i) => (
          <div className="line" key={i} style={{ transform: `rotate(${(i + 1) * 30}deg)` }}>
            <span className="hour">{i + 1}</span>
            <span className="hour opp-side">{i + 7}</span>
          </div>
        ))}
      </div>

      {/* Clock hands */}
      <div className="hand" id="hour-hand">
        <div className="arrow"></div>
      </div>
      <div className="hand" id="minute-hand">
        <div className="arrow"></div>
      </div>
      <div className="hand" id="second-hand">
        <div className="arrow"></div>
      </div>
      <div className="dot"></div>
    </div>
  );
};

export default ClockUi;
