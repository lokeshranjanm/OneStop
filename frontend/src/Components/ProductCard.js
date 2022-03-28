import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Link to="">
        <img
          src="https://res.cloudinary.com/drzudfgzl/image/upload/v1596103469/ys00seex0dggkdsy0gqx.jpg"
          // className="thumbnail"
          alt=""
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Link>
      <Typography
        style={{
          color: "black",
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: 5,
        }}
      >
        Roadster
      </Typography>
      <Typography style={{ fontSize: "14px", color: "grey", marginTop: 6 }}>
        Printed A-Line Kurta
      </Typography>
      <Typography
        style={{ fontSize: "16px", fontWeight: "bold", marginTop: 10 }}
      >
        ₹500
      </Typography>
    </div>
  );
};

export default ProductCard;
