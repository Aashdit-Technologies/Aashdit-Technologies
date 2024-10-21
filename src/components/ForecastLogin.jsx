import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import hr from "../images/hr.png";
import smone from "../images/1.png";
import smtwo from "../images/2.png";
import smthree from "../images/3.png";
import smfive from "../images/5.png";
import { motion } from "framer-motion";
import Logo from "../images/logo.png";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff, Login } from "@mui/icons-material";
import ClockUI from "./ClockUI";

const temperatureBackgrounds = {
  cold: {
    background: "linear-gradient(to bottom, #00BFFF, #1E90FF)",
    animation: "coldAnimation 10s ease-in-out infinite",
  },
  cool: {
    background: "linear-gradient(to bottom, #87CEEB, #4682B4)",
    animation: "coolAnimation 10s ease-in-out infinite",
  },
  warm: {
    background: "linear-gradient(to bottom, #FFD700, #FFA500)",
    animation: "warmAnimation 10s ease-in-out infinite",
  },
  hot: {
    background: "linear-gradient(to bottom, #FF4500, #FF6347)",
    animation: "hotAnimation 10s ease-in-out infinite",
  },
};

const kelvinToCelsius = (tempK) => Math.round(tempK - 273.15);

const API_KEY = "c247f88f34ce3fcbce03f4bbaa926212";

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
// Get current date and time
// const currentDateTime = new Date().toLocaleString();

function ForecastLogin() {
  const [showText, setShowText] = useState(false);
  const [value, setValue] = useState("");
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

  const handleClickShowText = () => {
    setShowText((prev) => !prev);
  };
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
        staggerChildren: 0.5, // Animates children with a delay
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
                  <motion.div
                    className="main_lgin"
                    style={{
                      ...backgroundStyle,
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      className="main_lgin_fig"
                      variants={imageVariants}
                    >
                      <img src={hr} alt="" />
                    </motion.div>

                    <div className="main_lgin_smfig">
                      <motion.div
                        className="main_lgin_smfig_1"
                        variants={imageVariants}
                      >
                        <img src={smone} alt="" />
                      </motion.div>
                      <motion.div
                        className="main_lgin_smfig_2"
                        variants={imageVariants}
                      >
                        <img src={smtwo} alt="" />
                      </motion.div>
                      <motion.div
                        className="main_lgin_smfig_3"
                        variants={imageVariants}
                      >
                        <img src={smthree} alt="" />
                      </motion.div>
                      <motion.div
                        className="main_lgin_smfig_5"
                        variants={imageVariants}
                      >
                        <img src={smfive} alt="" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <div className="col-lg-4 col-md-4 p-0">
                  <div className="main_rht">
                    <div className="main_rht_time mt-3">
                      <h3>{greeting}</h3>
                      <div className="logo">
                        <img src={Logo} alt="" />
                      </div>
                      {/* <h6 >{currentDateTime}</h6> */}
                    </div>
                    <div className="main_rht_box">
                      <form action="">
                        <div className="row">
                          <div className="col-md-12 col-lg-12">
                            <div className="main_rht_box_inpt">
                              <TextField
                                id="standard-basic"
                                label="User ID"
                                variant="standard"
                                sx={{ width: "100%" }}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-12 mt-2">
                            <div className="main_rht_box_inpt">
                              <TextField
                                id="enabled-text-field"
                                label="Password"
                                variant="standard"
                                type={showText ? "text" : "password"} // Change type based on toggle
                                value={value}
                                onChange={(e) => setValue(e.target.value)} // Handle value change
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle text visibility"
                                        onClick={handleClickShowText}
                                        edge="end"
                                      >
                                        {showText ? (
                                          <VisibilityOff />
                                        ) : (
                                          <Visibility />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                                sx={{ width: "100%" }} // Optional: Make the field full width
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 mt-3">
                            <div className="btn_lgin">
                              <Button
                                variant="contained"
                                startIcon={<Login />}
                                sx={{ width: "100%", mt: 2 }}
                              >
                                Log In
                              </Button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="clock_main">
                      <ClockUI/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1 style={{ color: "#fff", textAlign: "center" }}>{greeting}</h1>
      <h2 style={{ color: "#fff", textAlign: "center" }}>
        Current Temperature: {temperatureC}°C
      </h2> */}
    </div>
  );
}

export default ForecastLogin;
