import React from "react";
import Footer from "./components/footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import PriceList from "./components/PriceList";
import Travel from "./components/Travel";

function App() {
  return (
    <div>
      <Navbar withcroll={true} />
      <Main />
      <Travel />
      <PriceList />
      <Footer />
    </div>
  );
}

export default App;
