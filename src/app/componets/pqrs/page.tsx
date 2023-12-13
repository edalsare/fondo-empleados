import React from "react";
import "./pqrs.css";
import Body_pqrs from "./body_pqrs/body_pqrs";

const PageAhorros = () => {
  return (
    <div className="first-container">
      <div className="container-pqrs">
        <div className="section-pqrs">
          <h1 className="bi-stickies-fill iconsPqrs"></h1>
          <h1 className="textPqrs">PQRS</h1>
        </div>
        <div className="imagePqrs">
          <i className="bi bi-question-circle-fill"></i>
        </div>
        <div className="section-pqrs">
          <h2 className="textPqrs">
            Felicitaciones, peticiones, quejas, reclamos y sugerencias
          </h2>
        </div>
      </div>
      <div className="layout-pqrs">
        <Body_pqrs />
      </div>
    </div>
  );
};
export default PageAhorros;
