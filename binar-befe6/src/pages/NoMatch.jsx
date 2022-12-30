import React from "react";
import { useNavigate, BrowserRouter } from "react-router-dom";

import plane from "../assets/planeVector.png";

function App() {
  return (
    <BrowserRouter>
      <NoMatch />
    </BrowserRouter>
  );
}
const NoMatch = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center h-screen p-3">
      <div className="pt-28">
        <img src={plane} alt="plane" width={500} height={300} />
        <div className="mt-10 mb-6">
          <span className="text-sky-900 text-center">
            <h1 className="font-bold">
              We're Sorry, the page you requested could not be found
            </h1>
            <h1>Please go back to the Homepage</h1>
          </span>
        </div>
        <div className="flex justify-center">
          <button
            data-testid="navigate-test"
            onClick={() => navigate("/")}
            className="flex items-center p-5 lg:px-4 lg:py-2 bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl cursor-pointer"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
