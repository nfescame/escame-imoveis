import React from "react";
import colors from "../../colors/colors";
import { Link } from "react-router-dom";

const { base, text } = colors;

export default function Carousel(props) {
  console.log(props);
  return (
    <div className={props.active}>
      <div className='container-img'>
        <img src={props.img} alt='' />
      </div>

      <div className='container'>
        <div className={props.position}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <p>
            <Link
              className='btn btn-lg'
              to='#'
              style={{ backgroundColor: base, color: text }}
            >
              {props.textButton}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
