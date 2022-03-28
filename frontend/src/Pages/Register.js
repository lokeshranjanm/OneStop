import { TextField } from "@mui/material";
import React from "react";
import "./styles/Register.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <h2>SIGN UP</h2>

      <TextField
        required
        id="outlined-required"
        label="Username"
        style={{ marginTop: 40, width: 500 }}
      />

      <TextField
        required
        id="outlined-required"
        label="Email Address"
        style={{ marginTop: 30, width: 500 }}
      />

      <TextField
        id="outlined-password-input"
        label="EnterPassword"
        type="password"
        autoComplete="current-password"
        style={{ marginTop: 30, width: 500 }}
      />

      <TextField
        id="outlined-password-input"
        label="Re-EnterPassword"
        type="password"
        autoComplete="current-password"
        style={{ marginTop: 30, width: 500 }}
      />
      <Button
        variant="contained"
        style={{ marginTop: 50, width: 300 }}
        size="large"
      >
        Register
      </Button>
      <span style={{ marginTop: 20 }}>
        Already at OneStop?{" "}
        <Link to={"/signin"} style={{ textDecoration: "none" }}>
          Sign In
        </Link>
      </span>
    </div>
  );
}

export default Register;
