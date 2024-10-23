import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query"; // Ensure you are using the correct import
import hr from "../images/hr.png";
import smone from "../images/1.png";
import smtwo from "../images/2.png";
import smthree from "../images/3.png";
import smfive from "../images/5.png";
import { motion } from "framer-motion";
import Logo from "../images/logo.png";
import ClockUI from "./ClockUI";
import LoginApi from "./LoginApi";

const temperatureBackgrounds = {
  cold: {
    background: "linear-gradient(to bottom, #00BFFF, #1E90FF)",
  },
  cool: {
    background: "linear-gradient(to bottom, #87CEEB, #4682B4)",
  },
  warm: {
    background: "linear-gradient(to bottom, #FFD700, #FFA500)",
  },
  hot: {
    background: "linear-gradient(to bottom, #FF4500, #FF6347)",
  },
};

const kelvinToCelsius = (tempK) => Math.round(tempK - 273.15);

const API_KEY = "c247f88f34ce3fcbce03f4bbaa926212";

// Function to fetch weather data
const fetchWeatherData = async () => {
  const city = "Bhubaneswar";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  const data = await response.json();
  console.log("API Response Data:", data);
  return data;
};

// Function to determine greeting based on the current time
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 17) {
    return "Good Afternoon";
  } else if (hour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};

// Function to get background based on temperature
const getTemperatureBackground = (tempC) => {
  if (tempC < 10) {
    return temperatureBackgrounds.cold;
  } else if (tempC >= 10 && tempC < 20) {
    return temperatureBackgrounds.cool;
  } else if (tempC >= 20 && tempC < 30) {
    return temperatureBackgrounds.warm;
  } else {
    return temperatureBackgrounds.hot;
  }
};

function ForecastLogin() {
  // Update useQuery to use the object syntax
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeatherData,
  });

  if (isLoading) {
    return <div>Loading weather data...</div>;
  }

  if (isError) {
    return <div>Error fetching weather data: {error.message}</div>;
  }

  const temperatureK = data?.main?.temp;
  const temperatureC = kelvinToCelsius(temperatureK);
  const backgroundStyle = getTemperatureBackground(temperatureC);
  const greeting = getGreeting();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div
      style={{
        ...backgroundStyle,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="main">
        <div className="container">
          <div className="row ">
            <div className="main_bg ">
              <div className="row ">
                <div className="col-lg-8 col-md-8 p-0">
                  <div
                    style={{
                      ...backgroundStyle,
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <motion.div
                      className="main_lgin"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div className="main_lgin_fig" variants={imageVariants}>
                        <img src={hr} alt="" />
                      </motion.div>

                      <motion.div className="main_lgin_smfig_1" variants={imageVariants}>
                        <img src={smone} alt="" />
                      </motion.div>
                      <motion.div className="main_lgin_smfig_2" variants={imageVariants}>
                        <img src={smtwo} alt="" />
                      </motion.div>
                      <motion.div className="main_lgin_smfig_3" variants={imageVariants}>
                        <img src={smthree} alt="" />
                      </motion.div>
                      <motion.div className="main_lgin_smfig_5" variants={imageVariants}>
                        <img src={smfive} alt="" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 p-0">
                  <div className="main_rht">
                    <div className="main_rht_time mt-3">
                      <h3>{greeting}</h3>
                      <div className="logo">
                        <img src={Logo} alt="" />
                      </div>
                    </div>
                    <div className="main_rht_box">
                      <LoginApi />
                    </div>
                    <div className="clock_main">
                      <ClockUI />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForecastLogin;
