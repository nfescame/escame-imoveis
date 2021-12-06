import React from "react";

import NavBar from "../components/navBar";
import Header from "../components/header";
import Abas from "../components/abas";
import CardsImg from "../components/cardsImg";
import Footer from "../components/footer";
import Form from "../components/form";

import { AuthContext } from "../context/index";

export default function HomePage() {
  const data = React.useContext(AuthContext);
  const { contact } = data;

  return (
    <div>
      <NavBar />

      {contact === true ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2.5rem",
          }}
        >
          <Form />
        </div>
      ) : (
        <div>
          <Header />
          <Abas />
          <CardsImg />
        </div>
      )}
      <Footer />
    </div>
  );
}
