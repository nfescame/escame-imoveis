import React from "react";
import Router from "./router/Router";
import { Auth } from "./context";

function App() {
  return (
    <Auth>
      <Router />
    </Auth>
  );
}

export default App;
