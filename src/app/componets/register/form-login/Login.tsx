import React from "react";
import './Login.css'

const Slider: React.FC = () =>{
    return(
        <div className="container">
            <div className="card">
                <div className="datos">
                    <label htmlFor="user">Usuario / Email</label>
                    <input type="text" id="user" />
                </div>
                <div className="datos">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input type="password"  id="contrasena" />
                </div>
                <div className="datos">
                    <button>Ingresar</button>
                </div>
            </div>
        </div>
    );

}
export default Slider;