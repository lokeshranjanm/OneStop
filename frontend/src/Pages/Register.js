import { TextField } from "@mui/material";
import { React, useState } from "react";
import "./styles/Register.css";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const validate = (e) => {
    switch (e.target.name) {
      case "name":
        if (e.target.value.trim() === "") {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: "Username cannot be empty",
          }));
        } else {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: false,
          }));
        }
        break;
      case "email":
        if (e.target.value.trim() === "") {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: "Email Address cannot be empty",
          }));
        } else if (
          !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/gm.test(e.target.value.trim())
        ) {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: "Invalid email address",
          }));
        } else {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: false,
          }));
        }
        break;
      case "password":
        if (e.target.value.trim() === "") {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: "Password cannot be empty",
          }));
        } else {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: false,
          }));
        }
        break;
      case "confirmPassword":
        if (e.target.value.trim() === "") {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: "Confirm Password cannot be empty",
          }));
        } else if (formData.password.trim() !== e.target.value.trim()) {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: "Password and Confirm Password cannot be match",
          }));
        } else {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: false,
          }));
        }
        break;
      default:
    }
  };

  // const onBlur = (e) => {
  //   validate(e);
  //   setTapped((tapped) => ({ ...tapped, [e.target.name]: true }));
  // };

  const handleFormData = (e) => {
    setFormData((formData) => {
      return { ...formData, [e.target.name]: e.target.value };
    });
    validate(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.confirmPassword.trim() === ""
    ) {
      window.alert("All Fields is mandatory");
      return;
    }

    if (Object.keys(errors).every((key) => !errors[key])) {
      const payload = {
        username: formData.name,
        email: formData.email,
        password: formData.password,
      };

      axios
        .post(
          `https://localhost:7777/users/register`,
          {
            payload,
          },
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        )
        .then((response) => {
          if (response === "SUCCESS") {
            window.alert("You are resgister successfully");
            history.push("/signin");
          } else if (response === "USER_ALREADY_EXISTS") {
            window.alert("You are resgister successfully");
          }
        })
        .catch((error) => {
          console.log(error, "api failure");
        });
    }
  };

  return (
    <div className="register">
      <h2>SIGN UP</h2>

      <TextField
        required
        name="name"
        label="Username"
        style={{ marginTop: 40, width: 500 }}
        value={formData.name}
        onChange={handleFormData}
        // onBlur={onBlur}
        error={errors.name}
        helperText={errors.name ? errors.name : ""}
        FormHelperTextProps={{
          style: {
            color: "red",
            marginLeft: 2,
            marginTop: 4,
          },
        }}
      />

      <TextField
        required
        name="email"
        label="Email Address"
        style={{ marginTop: 30, width: 500 }}
        value={formData.email}
        onChange={handleFormData}
        // onBlur={onBlur}
        error={errors.email}
        helperText={errors.email ? errors.email : ""}
        FormHelperTextProps={{
          style: {
            color: "red",
            marginLeft: 2,
            marginTop: 4,
          },
        }}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        style={{ marginTop: 30, width: 500 }}
        value={formData.password}
        onChange={handleFormData}
        // onBlur={onBlur}
        error={errors.password}
        helperText={errors.password ? errors.password : ""}
        FormHelperTextProps={{
          style: {
            color: "red",
            marginLeft: 2,
            marginTop: 4,
          },
        }}
      />

      <TextField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        autoComplete="current-password"
        style={{ marginTop: 30, width: 500 }}
        value={formData.confirmPassword}
        onChange={handleFormData}
        // onBlur={onBlur}
        error={errors.confirmPassword}
        helperText={errors.confirmPassword ? errors.confirmPassword : ""}
        FormHelperTextProps={{
          style: {
            color: "red",
            marginLeft: 2,
            marginTop: 4,
          },
        }}
      />

      <Button
        variant="contained"
        style={{ marginTop: 50, width: 300 }}
        size="large"
        onClick={handleSubmit}
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
};

export default Register;
