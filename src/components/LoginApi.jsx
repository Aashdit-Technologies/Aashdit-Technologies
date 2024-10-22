import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff, Login } from "@mui/icons-material";

const LoginApi = () => {
  const [loginUser, setLoginUser] = useState("");
  const [showText, setShowText] = useState(false);
  const [lgPassword, setLgPassword] = useState("");
  const handleClickShowText = () => {
    setShowText((prev) => !prev);
  };
  return (
    <>
      <form action="">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="main_rht_box_inpt">
              <TextField
                id="standard-basic"
                label="User ID"
                variant="standard"
                sx={{ width: "100%" }}
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
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
                value={lgPassword}
                onChange={(e) => setLgPassword(e.target.value)} // Handle value change
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle text visibility"
                        onClick={handleClickShowText}
                        edge="end"
                      >
                        {showText ? <VisibilityOff /> : <Visibility />}
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
    </>
  );
};

export default LoginApi;
