'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../css/login.css";
import { handleChange, saveUser } from "../scripts/usario";

const Register = () => {
  const click = useRouter()
  const myhome = ()=>{
    click.push("/myhome")

  }

  return (
    <div className="container-login">
      <div className="row">
        <div className="col-img col">
          <div className="figure">
            <Link className="icon-home bi bi-house-fill" href="/"></Link>
            <img
              src="/img/register.jpeg"
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
              <h3 className="text-login">Regístrate Aquí</h3>
            </div>
            <div className="m-element t-zize">
              Completa los siguientes datos para realizar tu registro
            </div>
            <div className="m-element">
                <h6>Email</h6>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="l-input form-control"
                  id="correo"
                  placeholder="name@example.com"
                  onChange={handleChange}
                />
                <label form="floatingInput">
                  <h3 className="bi bi-envelope-at-fill"></h3>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="m-element">
                  <h6>Identificación</h6>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="l-input form-control"
                      id="identificacion"
                      placeholder="identifiacion"
                      onChange={handleChange}
                    />
                    <label form="floatingInput">
                      <h3 className="bi bi-hash"></h3>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="m-element">
                <h6>Nombre de usuario</h6>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="l-input form-control"
                      id="usuario"
                      placeholder="usuario"
                      onChange={handleChange}
                    />
                    <label form="floatingInput">
                      <h3 className="bi bi-person-fill"></h3>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="m-element">
                <h6>Contraseña</h6>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="l-input form-control"
                      id="contraseña"
                      placeholder="pasword"
                      onChange={handleChange}
                    />
                    <label form="floatingInput">
                      <h3 className="bi bi-fingerprint"></h3>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="m-element">
                <h6>Repite contraseña</h6>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="l-input form-control"
                      id="floatingInput"
                      placeholder="password"
                      onChange={handleChange}
                    />
                    <label form="floatingInput">
                      <h3 className="bi bi-unlock-fill"></h3>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-element">
              <button type="button" className="btn btn-login btn-lg" onClick={saveUser}>
                Continuar
              </button>
            </div>
            <div className="m-element t-zize">
              ¿Ya tienes cuanta?
              <Link className="a-login" href="/login">
                {" "}
                Inicia sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
