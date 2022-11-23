import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import PriceList from "./components/PriceList";
import Travel from "./components/Travel";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Travel />
      <PriceList />
    </div>
  );
}

export default App;
