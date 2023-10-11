import React from "react";
import "./pageAhorros.css"

const PageAhorros = () =>{
    return(
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
          );
}
export default PageAhorros;