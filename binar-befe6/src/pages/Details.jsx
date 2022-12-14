import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import React, { useState, useEffect } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";

function Details() {
  const [details, setdetails] = useState([]);
  const [setQr] = useState([]);
  
  const token = JSON.parse(localStorage.getItem("token"));
  const Id = localStorage.getItem("guestId");
  const order = localStorage.getItem("orderId");
  const getInfo = async (Id) => {
    try {
      const res = await axios.get(
        `https://binar-academy-terbangin.herokuapp.com/api/ticket/get/${Id}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      localStorage.setItem("orderId", res.data.data.orderId);
      setdetails(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getQr = async () => {
    try {
      const code = await axios.get(
        `https://binar-academy-terbangin.herokuapp.com/api/QRcode/${localStorage.getItem(
          "orderId"
        )}`
      );
      setQr(code);
    } catch (error) {}
  };

  useEffect(() => {
    getQr(order);
    getInfo(Id);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {token ? (
        <>
          <Navbar withcroll={false} />

          <div className="content bg-gray-100 w-full h-full  flex justify-center flex-col items-center py-24 ">
            <div className="box bg-white w-[80vw] lg:w-[50vw] h-fit rounded-lg drop-shadow-lg">
              <div className="head flex flex-row items-center space-x-4">
                <h1 className="text-gray-700 font-medium p-4 border-l-4 border-primary-100">
                  Guest Information
                </h1>
                <IoArrowBackCircleOutline
                  className="cursor-pointer hover:scale-110 duration-300"
                  size={25}
                  onClick={() => navigate("/history")}
                />
              </div>

              <div className="content flex flex-col">
                <div className="name grid grid-cols-2 gap-x-3 ml-4">
                  <div className="firstName">
                    <p className="mb-0 font-semibold text-gray-700">
                      First Name
                    </p>
                    <p className="font-thin text-gray-700">
                      {details &&
                        details.length !== 0 &&
                        details.guest.firstName}
                    </p>
                  </div>
                  <div className="lastName">
                    <p className="mb-0 font-semibold text-gray-700">
                      Last Name
                    </p>
                    <p className="font-thin text-gray-700">
                      {" "}
                      {details &&
                        details.length !== 0 &&
                        details.guest.lastName}
                    </p>
                  </div>
                </div>
                <div className="national grid grid-cols-2 gap-x-3 ml-4">
                  <div className="nationality">
                    <p className="mb-0 font-semibold text-gray-700">
                      Nationality
                    </p>
                    <p className="font-thin text-gray-700">
                      {" "}
                      {details &&
                        details.length !== 0 &&
                        details.guest.nationality}
                    </p>
                  </div>
                  <div className="country">
                    <p className="mb-0 font-semibold text-gray-700">Country</p>
                    <p className="font-thin text-gray-700">
                      {" "}
                      {details && details.length !== 0 && details.guest.country}
                    </p>
                  </div>
                </div>

                <div className="national grid grid-cols-2 gap-x-3 ml-4">
                  <div className="nationality">
                    <p className="mb-0 font-semibold text-gray-700">Passport</p>
                    <p className="font-thin text-gray-700">
                      {" "}
                      {details &&
                        details.length !== 0 &&
                        details.guest.passport}
                    </p>
                  </div>
                  <div className="country">
                    <p className="mb-0 font-semibold text-gray-700">
                      End Passport
                    </p>
                    <p className="font-thin text-gray-700">
                      {" "}
                      {details &&
                        details.length !== 0 &&
                        details.guest.endPassport}
                    </p>
                  </div>
                </div>

                <div className="national grid grid-cols-2 gap-x-3 ml-4">
                  <div className="nationality">
                    <p className="mb-0 font-semibold text-gray-700">
                      Birth Date
                    </p>
                    <p className="font-thin text-gray-700">
                      {" "}
                      {details &&
                        details.length !== 0 &&
                        details.guest.birthDate}
                    </p>
                  </div>
                  <div className="country">
                    <p className="mb-0 font-semibold text-gray-700">Seat</p>
                    <p className="font-thin text-gray-700">
                      {" "}
                      {details && details.length !== 0 && details.seat.seatName}
                    </p>
                  </div>
                </div>
              </div>

              <div className="head">
                <h1 className="text-gray-700 font-medium p-4  border-l-4 border-primary-100">
                  Guest Contact
                </h1>
              </div>
              <div className="content flex flex-col">
                <div className="name grid grid-cols-2 gap-x-3 ml-4">
                  <div className="firstName">
                    <p className="mb-0 font-semibold text-gray-700">
                      First Name
                    </p>
                    <p className="font-thin text-gray-700">
                      {details &&
                        details.length !== 0 &&
                        details.guest.contact.firstName}
                    </p>
                  </div>
                  <div className="lastName">
                    <p className="mb-0 font-semibold text-gray-700">
                      Last Name
                    </p>
                    <p className="font-thin text-gray-700">
                      {details &&
                        details.length !== 0 &&
                        details.guest.contact.lastName}
                    </p>
                  </div>
                </div>
                <div className="national   ml-4 mb-4">
                  <div className="country lg:grid lg:grid-rows-2 lg:grid-flow-col ">
                    <div className="nationality">
                      <div className="notelp">
                        <p className="mb-0 font-semibold text-gray-700">
                          No Telp
                        </p>
                        <p className="font-thin text-gray-700">
                          {details &&
                            details.length !== 0 &&
                            details.guest.contact.noTelp}
                        </p>
                      </div>
                      <div className="email">
                        <p className="mb-0 font-semibold text-gray-700">
                          Email
                        </p>
                        <p className="font-thin text-gray-700 ">
                          {details &&
                            details.length !== 0 &&
                            details.guest.contact.email}
                        </p>
                      </div>
                    </div>

                    <div className="pdf items-center justify-center flex lg:items-start lg:justify-start pt-6 lg:pt-4 xl:pt-4 xl:ml-12">
                      <a
                        href={`https://binar-academy-terbangin.herokuapp.com/api/generateOrder/${details.orderId}`}
                      >
                        <button className="p-3 bg-primary-100 text-white rounded-lg hover:drop-shadow-lg">
                          Download Invoice
                        </button>
                      </a>
                    </div>
                    <div className="pdf lg:row-span-2 items-center justify-center xl:justify-center lg:justify-end flex mr-3 pt-6">
                      <div className="lg:ml-24 xl:ml-0">
                        <h1 className="lg:pl-3 xl:pl-16 hidden lg:block xl:block font-light">
                          Booking QR Code :
                        </h1>
                        <img
                          className="lg:w-[70%] xl:w-[90%] w-[100%] md:w-[40%]"
                          src={`https://binar-academy-terbangin.herokuapp.com/api/QRcode/${order}`}
                          alt="barcode"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        Swal.fire({
          icon: "error",
          title: "Oopps..!",
          text: "If you are not logged in, you can login first !",
          confirmButtonText: "Login",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/login";
          }
        })
      )}
    </>
  );
}

export default Details;
