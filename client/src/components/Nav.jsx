import React from "react";
import Style from "../styles/nav.css";
import Usuarios from "../img/usuarios.png";

const Nav = () => {
  return (
    <div>
      <nav>
        <div class="imagenes">
          <img src={Usuarios} alt="" />
        </div>
        <div class="apartados">
          <p>
            <a href="">Informacion</a>
          </p>
          <p>
            <a href="">Ubicacion</a>
          </p>
          <p>
            <a href="">Menus</a>
          </p>
          <p>
            <a href="">Reservas</a>
          </p>
        </div>
        <div class="imagenes">
          <img src={Usuarios} />
          <div>
            <button>cuenta</button>
          </div>
          <div>
            <button>cuenta</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
