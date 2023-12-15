import React from "react";
import Link from "next/link";
import "../css/login.css";
import "./myhome.css";

const MyHome = () => {
  return (
    <div className="container-login">
      <div className="row">
        <div className="col-img col">
          <div className="figure myhome-con">
            <div>
              <Link className="icon-myhome bi bi-power" href="/"></Link>
            </div>
            <div>
              <div className="title-myhome">FonIbero</div>
            </div>
            <div className="baner-myhome">
              <i className="bi bi-card-text bi-baner"></i>
              <i className="bi bi-currency-exchange bi-baner"></i>
            </div>
            <div className="texto-myhome">
              <h2 className="">Hola; Edison</h2>
              <h4>Bienvenido de nuevo a la susursal vrtual</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="datos-login">
            <div className="right-text">
              <div className="nombre-usr">
                <input
                  type="text"
                  className="input-name"
                  defaultValue={"Salazar Revelo"}
                  id="lastname-loged"
                  readOnly
                />
                <input
                  type="text"
                  className="input-name"
                  defaultValue={"Edison Albeiro"}
                  id="name-loged"
                  readOnly
                />
              </div>
              <i className="bi bi-person-bounding-box bi-foto"></i>
            </div>
            <div className="t-portafolio">
              <i className="bi bi-card-heading t-c bi-baner"></i>
              <div className="input-name t-p ">Portafolio</div>
            </div>
            <div>
              <h3 className="text-center t-c inpu-name">Estado de cuenta</h3>
            </div>
            <div className="text-center t-zize">
              Conozca al detalle cada uno de sus productos
            </div>
            <div className="row">
              <div className="col-6">
                <div className="col-b">
                  <div className="text-center input-name t-c">
                    Aportes y Ahorros
                  </div>
                  <div className="row t-portafolio row-ac">
                    <div className="col"> Fecha de corte: </div>
                    <div className="col t-ac">
                      <label>$</label>
                      <input type="text" className="input-ac" defaultValue={"000"} readOnly/>
                    </div>
                  </div>
                  <div className="row t-portafolio row-ac">
                    <div className="col"> Aportes: </div>
                    <div className="col t-ac">
                      <label>$</label>
                      <input type="text" className="input-ac"  defaultValue={"000"} readOnly/>
                    </div>
                  </div>
                  <div className="row t-portafolio row-ac">
                    <div className="col"> Ahorro permanente: </div>
                    <div className="col t-ac">
                      <label>$</label>
                      <input type="text" className="input-ac" defaultValue={"000"} readOnly/>
                    </div>
                  </div>
                  <div className="row t-portafolio row-ac">
                    <div className="col"> Rendimiento: </div>
                    <div className="col t-ac">
                      <label>$</label>
                      <input type="text" className="input-ac" defaultValue={"000"} readOnly/>
                    </div>
                  </div>   
                  <div >Total aportes y Ahorros</div> 
                  <div className="t-ac">
                    <label className="right-text input-ac t-c input-name" htmlFor="">$</label>
                    <input type="text" className=" left-text input-ac t-c input-name " defaultValue={"000"} readOnly/>              
                   </div>
                  </div>                
              </div> 
              <div className="col-6">
              <div className="col-b">
                <div className="text-center input-name t-c">
                    Aportes y Ahorros
                </div>
                <div className="text-center row-ac">Aún no tienes un Crédirto con nosotros, Materializa tus sueños y metas con nuestras soluciones</div>
                <div className="text-center t-c row-ac">Conoce más</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyHome;
