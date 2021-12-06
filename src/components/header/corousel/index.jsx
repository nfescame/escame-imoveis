import React from "react";
import colors from "../../../colors/colors";

import { AuthContext } from "../../../context/index";

const { base, text } = colors;

export default function Carousel(props) {
  const data = React.useContext(AuthContext);
  const { setContact } = data;

  function handleClick() {
    setContact(true);
  }

  return (
    <div className={props.active}>
      <div className='container-img'>
        <img src={props.img} alt='' />
      </div>

      <div className='container'>
        <div className={props.position}>
          <h1 style={{ color: "black" }}>{props.title}</h1>
          <p style={{ color: "black" }}>{props.text}</p>
          <p>
            <button
              onClick={handleClick}
              className='btn btn-lg'
              style={{ backgroundColor: base, color: text }}
            >
              {props.textButton}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
