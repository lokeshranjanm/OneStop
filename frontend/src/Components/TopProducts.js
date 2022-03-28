import React from "react";
import Grid from "@mui/material/Grid";
import "./styles/Category.css";
import ProductCard from "./ProductCard";

const categories = [
  {
    image:
      "https://www.wrl.org/wp-content/uploads/2021/12/various-sports-accessories-pic.jpg",
    name: "Sports",
    link: "/sports",
  },
  {
    image:
      "https://cdn.dribbble.com/users/2130467/screenshots/14393984/media/2c73ab99a7c180d320e14a0cec561509.png?compress=1&resize=400x300&vertical=top",
    name: "Electroincs",
    link: "/electronics",
  },
  {
    image:
      "https://media.istockphoto.com/photos/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-picture-id1257563298?k=20&m=1257563298&s=170667a&w=0&h=1ZWgeb1wAK2STpqq8k76dpRSD45NEcd6orUYhvIJ-MA=",
    name: "Clothing",
    link: "/clothing",
  },
];

function TopProducts() {
  return (
    <div style={{ padding: "0px 20px" }}>
      <h3 style={{ padding: "20px 0px 10px 0px" }}>#Top Products</h3>
      <Grid container spacing={10} style={{ padding: "0px 10px" }}>
        <Grid item xs={6} sm={4} md={4} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default TopProducts;
