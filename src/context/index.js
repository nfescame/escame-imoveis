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
  const [select, setSelect] = useState();
  console.log("select", select);
  const cards = {
    prontos: [
      {
        img: img1,
        title: "title1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
      {
        img: img2,
        title: "title2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
      {
        img: img3,
        title: "title3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
      {
        img: img4,
        title: "title4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
    ],
    construçao: [
      {
        img: img5,
        title: "title5",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
      {
        img: img6,
        title: "title6",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
      {
        img: img7,
        title: "title7",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
      {
        img: img8,
        title: "title8",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
    ],
    lançamentos: [
      {
        img: img9,
        title: "title9",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
      {
        img: img10,
        title: "title10",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
      {
        img: img11,
        title: "title11",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
      {
        img: img12,
        title: "title12",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
    ],
  };

  return (
    <AuthContext.Provider value={{ cards, setSelect, select }}>
      {props.children}
    </AuthContext.Provider>
  );
};
