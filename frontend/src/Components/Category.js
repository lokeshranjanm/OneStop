import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "./Category.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function Category() {
  return (
    <div className="category">
      <h3 style={{ padding: 20 }}>#Shop Top Categories</h3>
      <Grid container>
        <Grid item xs={12} md={4} sm={12} className="root">
          <Link>
            <a>
              <div
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
              >
                <div className="backdrop" />
                <img
                  src="https://storage.googleapis.com/shoopy-test/2/cat/1629224941565_2_cat.jpg"
                  className="thumbnail"
                  alt=""
                />
                <div className="nameContainer">
                  <Typography className="name">Sports </Typography>{" "}
                </div>
                <ChevronRightIcon className="rightArrow" />
              </div>
            </a>
          </Link>
        </Grid>
        <Grid item xs={12} md={4} sm={12} className="root">
          <Link>
            <a>
              <div
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
              >
                <div className="backdrop">
                  <img
                    src="https://res.cloudinary.com/drzudfgzl/image/upload/v1596103536/tvfhvp7qobnl7fqcrwh5.jpg"
                    className="thumbnail"
                    alt=""
                  />
                  <div className="nameContainer">
                    <Typography className="name">Electronics </Typography>{" "}
                  </div>
                  <ChevronRightIcon className="rightArrow" />
                </div>
              </div>
            </a>
          </Link>
        </Grid>
        <Grid item xs={12} md={4} sm={12} className="root">
          <Link>
            <a>
              <div
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
              >
                <div className="backdrop">
                  <img
                    src="https://res.cloudinary.com/drzudfgzl/image/upload/v1596103536/tvfhvp7qobnl7fqcrwh5.jpg"
                    className="thumbnail"
                    alt=""
                  />
                  <div className="nameContainer">
                    <Typography className="name">Clothing </Typography>
                  </div>
                  <ChevronRightIcon className="rightArrow" />
                </div>
              </div>
            </a>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Category;