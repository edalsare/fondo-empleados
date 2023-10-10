import React from "react";
import './Header.css'
import { link } from "fs";

const Header = () =>{
    return(
        <div className="Main">
            <div className="container">
                <div className="Logo">
                    <h1>FonIbero</h1>
                </div>
                <div className="Button">
                    <ul>
                        <li><a href="">Servicios</a></li>
                        <li><a href="">Contactanos</a></li>
                        <li><a href="">Formularios</a></li>
                        <li><a href="">PQRS</a></li>
                    </ul>
                </div>
                <div>
                    <button className="area-segura">Area Segura</button>
                </div>
            </div>
        </div>
    )

}
export default Header;