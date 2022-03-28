import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "70px",
        background: "#2196F3",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <span style={{ fontWeight: "600", color: "white" }}>
        © 2022 Copyright: OneStop
      </span>
      <p style={{ color: "white" }}>All Rights Reserved</p>
      {/* <a class="text-white" href="https://OneStop.com/">MDBootstrap.com</a> */}
    </div>
  );
};

export default Footer;
