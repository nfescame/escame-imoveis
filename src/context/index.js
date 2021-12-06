import React, { useState } from "react";
// prontos
import img1 from "../img/done/AdobeStock_136888535_Preview.jpeg";
import img2 from "../img/done/AdobeStock_204566991_Preview.jpeg";
import img3 from "../img/done/AdobeStock_219710464_Preview.jpeg";
import img4 from "../img/done/AdobeStock_222699002_Preview.jpeg";

// construçao
import img5 from "../img/construction/AdobeStock_142685630_Preview.jpeg";
import img6 from "../img/construction/AdobeStock_216255394_Preview.jpeg";
import img7 from "../img/construction/AdobeStock_268225711_Preview.jpeg";
import img8 from "../img/construction/AdobeStock_68632352_Preview.jpeg";

// lançamentos
import img9 from "../img/news/AdobeStock_122809314_Preview.jpeg";
import img10 from "../img/news/AdobeStock_295713811_Preview.jpeg";
import img11 from "../img/news/AdobeStock_316224111_Preview.jpeg";
import img12 from "../img/news/AdobeStock_94982338_Preview.jpeg";

export const AuthContext = React.createContext({});

export const Auth = (props) => {
  const [contact, setContact] = useState(false);
  const [select, setSelect] = useState("prontos");

  const cards = {
    prontos: [
      {
        _id: "A5216",
        img: img1,
        title: "Casa",
        description:
          "Casa com 3 Quartos e 2 banheiros à Venda, 136 m² por R$ 722.000,00",
      },
      {
        _id: "A8467",
        img: img2,
        title: "Sobrado",
        description:
          "Casa com 4 Quartos e 4 banheiros à Venda, 273 m² por R$ 1.500.000,00",
      },
      {
        _id: "A6674",
        img: img3,
        title: "Casa",
        description:
          "Casa com 2 Quartos e 1 banheiro à Venda, 120 m² por R$ 590.000,00",
      },
      {
        _id: "A5488",
        img: img4,
        title: "Sobrado",
        description:
          "Casa com 3 Quartos e 3 banheiros à Venda, 200 m² por R$ 550.000,00",
      },
    ],
    construçao: [
      {
        _id: "C7784",
        img: img5,
        title: "Apartamento",
        description:
          "Apartamento com 3 Quartos e 2 banheiros à Venda, 59 m² por R$ 260.000,00",
      },
      {
        _id: "C6354",
        img: img6,
        title: "Apartamento",
        description:
          "Apartamento com 3 Quartos e 2 banheiros à Venda, 82 m² por R$ 350.000,00",
      },
      {
        _id: "C9874",
        img: img7,
        title: "Apartamento",
        description:
          "Apartamento com 2 Quartos e 2 banheiros à Venda, 70 m² por R$ 365.000,00",
      },
      {
        _id: "C2214",
        img: img8,
        title: "Apartamento",
        description:
          "Apartamento com 3 Quartos e 2 banheiros à Venda, 59 m² por R$ 260.000,00",
      },
    ],
    lançamentos: [
      {
        _id: "F8741",
        img: img9,
        title: "Casa de Condomínio",
        description:
          "Casa de Condomínio com 2 Quartos e 2 banheiros à Venda, 70 m² por R$ 365.000,00",
      },
      {
        _id: "F1459",
        img: img10,
        title: "Casa de Condomínio",
        description:
          "Casa de Condomínio com 3 Quartos e 3 banheiros à Venda, 82 m² por R$ 350.000,00 ",
      },
      {
        _id: "F8933",
        img: img11,
        title: "Casa de Condomínio",
        description:
          "Casa de Condomínio com 2 Quartos e 1 banheiros à Venda, 65 m² por R$ 280.000,00 ",
      },
      {
        _id: "F1223",
        img: img12,
        title: "Casa de Condomínio",
        description:
          "Casa de Condomínio com 2 Quartos e 1 banheiros à Venda, 32 m² por R$ 210.000,00 ",
      },
    ],
  };

  return (
    <AuthContext.Provider
      value={{ cards, setSelect, select, contact, setContact }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
