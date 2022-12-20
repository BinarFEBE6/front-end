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
  const getInfo = async () => {
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
      console.log(res);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    dispatch(getData(guestId));
    getInfo();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="">
      <Navbar withcroll={false} />

      <div className="content bg-gray-100 w-full h-[100vh] flex justify-center flex-col items-center ">
        <h1
          onClick={() => navigate("/history")}
          className="text-gray-700 cursor-pointer mt-6"
        >
          Back To History
        </h1>
        <div className="box bg-white w-[80vw] h-fit rounded-lg drop-shadow-lg ">
          <div className="head">
            <h1 className="text-gray-700 font-medium p-4">Guest Information</h1>
          </div>
          <div className="content flex flex-col">
            <div className="name grid grid-cols-2 gap-x-3 ml-4">
              <div className="firstName">
                <p className="mb-0 font-semibold text-gray-700">First Name</p>
                <p className="font-thin text-gray-700">
                  {data.guest.firstName}
                </p>
              </div>
              <div className="lastName">
                <p className="mb-0 font-semibold text-gray-700">Last Name</p>
                <p className="font-thin text-gray-700">{data.guest.lastName}</p>
              </div>
            </div>
            <div className="national grid grid-cols-2 gap-x-3 ml-4">
              <div className="nationality">
                <p className="mb-0 font-semibold text-gray-700">Nationality</p>
                <p className="font-thin text-gray-700">
                  {data.guest.nationality}
                </p>
              </div>
              <div className="country">
                <p className="mb-0 font-semibold text-gray-700">Country</p>
                <p className="font-thin text-gray-700">{data.guest.country}</p>
              </div>
            </div>

            <div className="national grid grid-cols-2 gap-x-3 ml-4">
              <div className="nationality">
                <p className="mb-0 font-semibold text-gray-700">Passport</p>
                <p className="font-thin text-gray-700">{data.guest.passport}</p>
              </div>
              <div className="country">
                <p className="mb-0 font-semibold text-gray-700">End Passport</p>
                <p className="font-thin text-gray-700">
                  {data.guest.endPassport}
                </p>
              </div>
            </div>

            <div className="national grid grid-cols-2 gap-x-3 ml-4">
              <div className="nationality">
                <p className="mb-0 font-semibold text-gray-700">Birth Date</p>
                <p className="font-thin text-gray-700">
                  {data.guest.birthDate}
                </p>
              </div>
              <div className="country">
                <p className="mb-0 font-semibold text-gray-700">Seat</p>
                <p className="font-thin text-gray-700">{data.seat.seatName}</p>
              </div>
            </div>
          </div>

          <div className="head">
            <h1 className="text-gray-700 font-medium p-4">Guest Contact</h1>
          </div>
          <div className="content flex flex-col">
            <div className="name grid grid-cols-2 gap-x-3 ml-4">
              <div className="firstName">
                <p className="mb-0 font-semibold text-gray-700">First Name</p>
                <p className="font-thin text-gray-700">
                  {data.guest.contact.firstName}
                </p>
              </div>
              <div className="lastName">
                <p className="mb-0 font-semibold text-gray-700">Last Name</p>
                <p className="font-thin text-gray-700">
                  {data.guest.contact.lastName}
                </p>
              </div>
            </div>
            <div className="national   ml-4">
              <div className="nationality">
                <p className="mb-0 font-semibold text-gray-700">No Telp</p>
                <p className="font-thin text-gray-700">
                  {data.guest.contact.noTelp}
                </p>
              </div>
              <div className="country ">
                <p className="mb-0 font-semibold text-gray-700">Email</p>
                <p className="font-thin text-gray-700 ">
                  {data.guest.contact.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
