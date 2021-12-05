import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/header/Header";
import Abas from "../components/abas";
import CardsImg from "../components/cardsImg";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <Abas />
      <CardsImg />
      <Footer />
    </div>
  );
}
