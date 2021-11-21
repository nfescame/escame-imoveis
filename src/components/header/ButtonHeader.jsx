import React from "react";

export default function ButtonHeader(props) {
  console.log(props);
  return (
    <button
      type='button'
      data-bs-target='#myCarousel'
      class='active'
      aria-current={props.ariacurrent}
      data-bs-slide-to={props.databsslideto}
      aria-label={props.arialabel}
    ></button>
  );
}
