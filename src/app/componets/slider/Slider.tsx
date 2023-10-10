import React from "react";
import imagen0 from "../../../../public/img/imagen0.jpeg";
import './Slider.css';

const Slider = ()=>{
    return(
<div id="carouselExampleCaptions" className="carousel slide" carousel-control-width='10px'>
  <div className="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/img/1.png" className="figure-img img-fluid rounded" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-black fs-1">First slide label</h5>
        <p className="text-black fw-bold">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/img/2.png" className="figure-img img-fluid rounded" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-black fs-1">Second slide label</h5>
        <p className="text-black fw-bold">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/img/1.png" className="figure-img img-fluid rounded" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-black fs-1">Third slide label</h5>
        <p className="text-black fw-bold">Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )

}
export default Slider;