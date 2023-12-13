import React from "react";
import "./pageAhorros.css";
import Sidebar from "./sidebar/sidebar";
import Body_ahorros from "./body-ahorros/body_ahorros";

const PageAhorros = () => {
  return (
    <div className="first-container">
      <div className="container-ahorros">
        <div className="section-ahorros">
          <h1 className="bi bi-piggy-bank-fill iconsAhorro"></h1>
          <h1 className="textAhorro">Ahorro permanente</h1>
        </div>
        <div className="imageAhorros"></div>
        <div className="section-ahorros">
          <h1 className="textAhorro">Excelentes beneficios para tu futuro</h1>
        </div>
      </div>
      <div className="layout-ahorros">
        <Sidebar/>
        <Body_ahorros/>
      </div>
    </div>
  );
};
export default PageAhorros;
