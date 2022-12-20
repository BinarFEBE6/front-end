import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/details";
function Details() {
  const [guest, setGuest] = useState([]);
  const { guestId } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  //   const getTicket = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://febe6.up.railway.app/api/ticket/get/${guestId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${JSON.parse(
  //               localStorage.getItem("token")
  //             )}`,
  //           },
  //         }
  //       );

  //       console.log(res.data.data.guest);
  //       setGuest(res.data.data.guest);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   console.log("succes", guest);
  useEffect(() => {
    // getTicket();
    dispatch(getData(guestId));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="">
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
          <div>
            {data.length && data.map((item) => <h1>{item.guest.firstName}</h1>)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
