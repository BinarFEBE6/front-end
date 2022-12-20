import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
function Details() {
  const { guestId } = useParams();
  const [guest, setGuest] = useState([]);
  const getTicket = async () => {
    try {
      const res = await axios.get(
        `https://febe6.up.railway.app/api/ticket/get/${guestId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      console.log(res.data.data);
      setGuest(JSON.stringify(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTicket();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <Navbar withcroll={false} />

      <div className="content bg-gray-100 w-full h-[100vh] flex justify-center flex-col items-center ">
        <h1
          onClick={() => navigate("/history")}
          className="text-gray-700 cursor-pointer"
        >
          Back To History
        </h1>
        <div className="box bg-white w-[80vw] h-[70vh] rounded-lg drop-shadow-lg ">
          <div className="head">
            <h1 className="text-gray-700 font-medium p-4">Guest Information</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
