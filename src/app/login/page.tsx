'use client'
import React,{useContext, useState} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContextState } from "../Types/user";
import Link from "next/link";
import "../css/login.css";
import { handleChange, saveUser } from "../scripts/login";

const Login = () => {
 
  return (
    <div className="container-login">
      <div className="row">
        <div className="col-img col">
          <div className="figure">
          <Link className="icon-home bi bi-house-fill" href="/"></Link>
            <img
              src="/img/login.jpeg"
              className="img-login img-fluid"
              alt="..."
            />
            <div className="center">FonIbero</div>
          </div>
        </div>
        <div className="col">
          <div className="datos-login">
            <div className="center-text">
              <h1>Sucursal virtual</h1>
            </div>
            <div>
              <h3 className="text-login">Inicia sesión</h3>
            </div>
            <div className="m-element t-zize">
              Digite su nombre de usuario para ingresar a la sucursal
            </div>
            <div className="center-text m-element">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="l-input form-control"
                  id="usuario"
                  placeholder="name@example.com"
                  onChange={handleChange}
                />
                <label form="floatingInput"><h5 className="bi bi-person-fill">Usuario</h5></label>
              </div>
            </div>
            <div className="center-text m-element">
            <div className="form-floating mb-3">
                <input
                  type="password"
                  className="l-input form-control"
                  id="contraseña"
                  placeholder="name@example.com"
                  onChange={handleChange}
                />
                <label form="floatingInput"><h5 className="bi bi-fingerprint">Contraseña</h5></label>
              </div>
            </div>
            <div className="center-text m-element">
            <button type="button" className="btn btn-login btn-lg" onClick={saveUser}>Ingresar</button>
            </div>
            <div className="m-element t-zize">
              ¿Eres un nuevo usuario? 
              <Link className="a-login" href="/register"> Regitrate aqui</Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
