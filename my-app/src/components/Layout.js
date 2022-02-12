import React from "react";
import Celular from "./Celular";
import Titulo from "./Titulo";
import Formulario from "./Formulario";
import Facebook from "./Facebook";
import Registro from "./Registro";
import Descarga from "./Descarga";

const Layout = () => {
  return (
    <div className="mx-0 d-flex justify-content-center p-5">
      <div className="columnas">
        <Celular />
      </div>
      <div className="d-flex flex-column columnas">
        <div className="border">
          <Titulo />
          <Formulario />
          <Facebook />
        </div>
        <div className="border my-2">
          <Registro />
        </div>
        <div>
            <Descarga />
        </div>
      </div>
    </div>
  );
};

export default Layout;
