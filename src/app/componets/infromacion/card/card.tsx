"use client";
import React, { useState } from "react";
import { slaiderDatos } from "../datos/Datos";
import "./card.css";

const Card: React.FC = () => {
  const [estado, setEstado] = useState("active");
  const funEstado = () => {
    setEstado(" ");
  };
  return (
    <div className="container-card">
      <div id="img-card" className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/img/imagen1.jpeg"
              className="img-fluid"
              alt="..."
              id="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">Afiliate a FonIbero</h2>
              <br />
              <p className="card-text ">Descarga el formulario &rarr;</p>
            </div>
          </div>
        </div>
      </div>

      <div id="carouselExampleIndicators" className=" card carousel slide mb-3">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          {slaiderDatos.map((item) => (
            <div
              className={
                item.id === "0" ? "carousel-item active" : "carousel-item"
              }
            >
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img src={item.img} className="img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <br />
                    <p className="card-text">{item.info} &rarr;</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Card;
