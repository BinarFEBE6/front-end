import React from "react";
import Footer from "./components/footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Travel from "./components/Travel";
import Destination from "./components/Destination"

function App() {
  return (
    <div>
      <Navbar withcroll={true} />
      <Main />
      <Travel />
      <Destination />
      <Footer />
    </div>
  );
}

export default App;
