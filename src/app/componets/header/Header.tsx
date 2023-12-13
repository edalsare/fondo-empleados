import React from "react";
import './Header.css'
import { link } from "fs";
import Link from "next/link";

const Header = () =>{
    return(
        <div className="Main">
            <div className="container-header">
                <div className="Logo">
                    <h1>FonIbero</h1>
                </div>
                <div className="Button">
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/ahorros">Ahorros</Link></li>
                        <li><Link href="">Formularios</Link></li>
                        <li><Link href="/pqrs">PQRS</Link></li>
                    </ul>
                </div>
                <div>
                    <button className="area-segura"><Link href="/login">Area Segura</Link></button>
                </div>
            </div>
        </div>
    )

}
export default Header;