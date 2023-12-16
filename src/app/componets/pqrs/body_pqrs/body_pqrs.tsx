import { handleChange, saveEmail } from "@/app/scripts/email";
const Body_pqrs = () => {
  return (
    <div className="container-pqrs-body">
      <div className="row align-items-center g-4">
        <div className="col-6">
          <h4>¿Es asociado?</h4>
          <div className="form-check form-check-inline">
          <label className="form-check-label" form="inlineRadio1">
              SI
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="si"
              value="SI"
              onChange={handleChange}
            />
            
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="no"
              value="NO"
              onChange={handleChange}
            />
            <label className="form-check-label" form="inlineRadio2">
              NO
            </label>
          </div>
        </div>
        <div className="col-6">
          <div className="borde-input">
            <h1 className="texto-borde">Documento</h1>
            <input
              type="text"
              className="borderin form-control"
              aria-label="First name"
              id="id"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="borde-input">
            <h1 className="texto-borde">Nombre</h1>
            <input
              type="text"
              className="borderin form-control"
              aria-label="First name"
              id="name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="borde-input">
            <h1 className="texto-borde">Apellidos</h1>
            <input
              type="text"
              className="borderin form-control"
              aria-label="First name"
              id="lastname"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="borde-input">
            <h1 className="texto-borde">Telefono</h1>
            <input
              type="text"
              className="borderin form-control"
              aria-label="First name"
              id="tel"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="borde-input">
            <h1 className="texto-borde">Correo</h1>
            <input
              type="text"
              className="borderin form-control"
              aria-label="First name"
              id="mail"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input
              className="area form-control"
              placeholder=" "
              id="coment"
              onChange={handleChange}
              style={{ height: "150px" }}
            ></input>
            <label>Comments</label>
          </div>
        </div>
        <div className="col-boton col-12 align-self-end">
        <button type="button" className="btn1 btn btn-lg" onClick={saveEmail}>ENVIAR</button>
        </div>
      </div>
    </div>
  );
};
export default Body_pqrs;
