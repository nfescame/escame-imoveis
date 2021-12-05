import React from "react";

import ButtonHeader from "./ButtonHeader";
import Carousel from "./Carousel";
import ControlCaurosel from "./ControlCarousel";

import "./style/header.css";

import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";

export default function Header() {
  return (
    <main>
      <div id='myCarousel' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          <ButtonHeader
            databsslideto='0'
            arialabel='Slide 1'
            className='active'
            ariacurrent='true'
          />
          <ButtonHeader databsslideto='1' arialabel='Slide 2' />
          <ButtonHeader databsslideto='2' arialabel='Slide 3' />
        </div>
        <div className='carousel-inner'>
          <Carousel
            active={"carousel-item active"}
            position={"carousel-caption text-start"}
            img={img1}
            title={"Melhores Imóveis em SP"}
            text={"Imóveis e Apartamentos à venda em SP ."}
            textButton={"Fale com o corretor"}
          />

          <Carousel
            active={"carousel-item"}
            position={"carousel-caption"}
            img={img2}
            title={"Visite Decorado"}
            text={"Lançamento e abertira do decorado neste final de semana."}
            textButton={"Fale com o corretor"}
          />

          <Carousel
            active={"carousel-item"}
            position={"carousel-caption text-end"}
            img={img3}
            title={"Lazer incomparavel"}
            text={"Fácil de pagar,fácil de chagar."}
            textButton={"Fale com o corretor"}
          />
        </div>
        <ControlCaurosel />
      </div>
    </main>
  );
}
