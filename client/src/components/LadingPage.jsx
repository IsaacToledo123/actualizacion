import React from "react";
import ImagenLading from "../img/imagenLading.png";
import Style from "../styles/ladingPage.css";
import Calendario from "../img/calendario.png";
import Ubicacion from '../img/ubicacion.png'
import Foto1 from '../img/foto1.png'
import Foto2 from '../img/foto2.png'
const LadingPage = () => {
  return (
    <div>
      <div class="imagenPrincipal">
        <img src={ImagenLading} class="imagenLading" />
      </div>
      <div class="contenido">
        <div class="titulo">
          <div>
            <h1>Cuando ir a la Sima de las Cotorras</h1>
          </div>
          <div>
            <img src={Calendario} class="calendario" />
          </div>
        </div>
      </div>
      <div class="content">
        <ul>
          <li>
            Todo el año: La Sima de las Cotorras es un centro ecoturístico que
            está abierto al público durante todo el año. Además del espectáculo
            de las cotorras, los guías locales ofrecen otras actividades como
            rápel, caminatas, observación aves de la región y acampar.
          </li>
          <li>
            Marzo y Abril: Es cuando más probabilidad hay de ver cotorras verdes
            y en mayores cantidades, ya sea al amanecer o durante el atardecer.
          </li>
          <li>
            De Mayo a Noviembre: Durante esta temporada también es probable ver
            cotorras, aunque en menores cantidades, pues comienzan a migrar.
          </li>
          <li>
            Amanecer: Hay que dormir ahí o madrugar para llegar a ver los
            primeros rayos del Sol.
          </li>
          <li>
            Atardecer: A partir de las 4:00 pm se empiezan a ver grupos de
            cotorras regresando a la Sima.
          </li>
          <li>
            Diciembre a Febrero: Durante el invierno, las cotorras migran a
            lugares más cálidos como el Arco del Tiempo, por lo que no es
            posible verlas durante estos meses. A veces, grupos pequeños de
            cotorras se quedan durante el invierno, pero por el frío no salen de
            la sima.
          </li>
        </ul>

        <div class='acomodarFotos'>
          <img src={Foto1} class='fotos' />
          <img src={Foto2}  class='fotos' />
        </div>
      </div>
      <div class="contenido">
        <div class="titulo">
          <div>
            <h1>Cómo llegar a la Sima de las Cotorras</h1>
          </div>
          <div>
            <img src={Ubicacion} class="ubicacion" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LadingPage;
