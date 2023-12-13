import React from "react";
import Slider from "./slider/Slider";
import Card from "./infromacion/card/card";
import Header from "./header/Header";
import Footer from "./Footer/Footer";

const Out = () =>{
    return(
        <>
        
        <div className="Header">
          <Header />
        </div>
        <Slider/>
        <Card/>
        
        <div>
          <Footer />
        </div>
        </>
    );
}
export default Out;