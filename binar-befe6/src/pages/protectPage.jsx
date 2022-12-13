import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function ProtectPage() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1 className="text-yellow-500 p-20 ">Login Dulu Gengs</h1>
      </div>
      <Footer />
    </div>
  );
}

export default ProtectPage;
