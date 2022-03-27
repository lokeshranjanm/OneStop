import { Slider } from "@material-ui/core";
import React from "react";
import Header from "../Components/Header";
import "../Pages/Home.css";

import CarouselComponent from "../Components/CarouselComponent";
import Category from "../Components/Category";
// import Product from "../Pages/Product"



function Home() {
  return (
    <div>
    
    <Header/>

    <CarouselComponent/>
    <Category/>
    


    </div>
  );
}

export default Home;
