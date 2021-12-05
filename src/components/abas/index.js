import React from "react";

import "./style.css";

import { AuthContext } from "../../context/index";

export default function Abas() {
  const data = React.useContext(AuthContext);
  const { setSelect } = data;
  console.log(data);

  function handleSelect(e) {
    console.log(e.target.name);
    setSelect(e.target.name);
    console.log(data);
  }
  return (
    <div
      style={{
        margin: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Encontre o melhor negocio .</h1>
      <div className='container-abas row row-cols-2'>
        <button
          name='prontos'
          onClick={handleSelect}
          type='button'
          className='btn col'
          style={{
            backgroundColor: "#640000",
            color: "white",
            margin: "1rem",
            width: "12rem",
            borderRadius: "12px",
            height: "3rem",
          }}
        >
          Pronto
        </button>
        <button
          name='construçao'
          onClick={handleSelect}
          type='button'
          className='btn '
          style={{
            backgroundColor: "#C81400",
            color: "white",
            margin: "1rem",
            width: "12rem",
            borderRadius: "12px",
            height: "3rem",
          }}
        >
          Em construção
        </button>
        <button
          name='lançamentos'
          onClick={handleSelect}
          type='button'
          className='btn '
          style={{
            backgroundColor: "#FF5A00",
            color: "white",
            margin: "1rem",
            width: "12rem",
            borderRadius: "12px",
            height: "3rem",
          }}
        >
          Lançamento
        </button>
      </div>
    </div>
  );
}
