import React, { useState } from "react";

function PriceList() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="priceList-section bg-gray-100 mx-auto py-24 text-gray-700">
      <h1 className="lg:text-2xl text-3xl font-bold text-center px-10 lg:px-0">
        Book with a Cheap Price from
      </h1>
      <div className="mt-12 flex justify-center">
        <h5
          onClick={() => setOpenTab(1)}
          className={`${
            openTab === 1
              ? "after:w-full text-gray-800"
              : "after:w-0 text-gray-400"
          } duration-500 hover:text-gray-800 lg:text-lg text-2xl cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[3px] after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full`}
        >
          Jawa
        </h5>
        <h5
          onClick={() => setOpenTab(2)}
          className={`${
            openTab === 2
              ? "after:w-full text-gray-800"
              : "after:w-0 text-gray-400"
          } duration-500 hover:text-gray-800 lg:text-lg text-2xl cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[3px] after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full ml-5`}
        >
          Sumatra
        </h5>
        <h5
          onClick={() => setOpenTab(3)}
          className={`${
            openTab === 3
              ? "after:w-full text-gray-800"
              : "after:w-0 text-gray-400"
          } duration-500 hover:text-gray-800 lg:text-lg text-2xl cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[3px] after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full ml-5`}
        >
          Bali
        </h5>
      </div>
      <div className="mt-6 text-center lg:mx-72 mx-5">
        <div className={openTab === 1 ? "block" : "hidden"}>
          {/* JAWA SECTION */}

          <div className="grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 gap-4">
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
              <img
                src="https://www.pesonaindo.com/wp-content/uploads/2015/12/Foto-Tempat-Wisata-di-Jawa-Tengah-Yang-Menarik-Pesona-Indonesia-fototrip-2.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
              <img
                src="https://www.pesonaindo.com/wp-content/uploads/2015/12/Foto-Tempat-Wisata-di-Jawa-Tengah-Yang-Menarik-Pesona-Indonesia-fototrip-2.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
              <img
                src="https://www.pesonaindo.com/wp-content/uploads/2015/12/Foto-Tempat-Wisata-di-Jawa-Tengah-Yang-Menarik-Pesona-Indonesia-fototrip-2.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg "
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
              <img
                src="https://www.pesonaindo.com/wp-content/uploads/2015/12/Foto-Tempat-Wisata-di-Jawa-Tengah-Yang-Menarik-Pesona-Indonesia-fototrip-2.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg "
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
              <img
                src="https://www.pesonaindo.com/wp-content/uploads/2015/12/Foto-Tempat-Wisata-di-Jawa-Tengah-Yang-Menarik-Pesona-Indonesia-fototrip-2.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
              <img
                src="https://www.pesonaindo.com/wp-content/uploads/2015/12/Foto-Tempat-Wisata-di-Jawa-Tengah-Yang-Menarik-Pesona-Indonesia-fototrip-2.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          {/* SUMATRA SECTION */}

          <div className="grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 gap-4">
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
              <img
                src="https://www.goodnewsfromindonesia.id/uploads/post/large-museum-rumah-baanjuang-bukittinggi-e70b2fd9d2966b41fdf9a123a8657951.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
              <img
                src="https://www.goodnewsfromindonesia.id/uploads/post/large-museum-rumah-baanjuang-bukittinggi-e70b2fd9d2966b41fdf9a123a8657951.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
              <img
                src="https://www.goodnewsfromindonesia.id/uploads/post/large-museum-rumah-baanjuang-bukittinggi-e70b2fd9d2966b41fdf9a123a8657951.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg "
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
              <img
                src="https://www.goodnewsfromindonesia.id/uploads/post/large-museum-rumah-baanjuang-bukittinggi-e70b2fd9d2966b41fdf9a123a8657951.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg "
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
              <img
                src="https://www.goodnewsfromindonesia.id/uploads/post/large-museum-rumah-baanjuang-bukittinggi-e70b2fd9d2966b41fdf9a123a8657951.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
              <img
                src="https://www.goodnewsfromindonesia.id/uploads/post/large-museum-rumah-baanjuang-bukittinggi-e70b2fd9d2966b41fdf9a123a8657951.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 3 ? "block" : "hidden"}>
          {/* BALI SECTION */}

          <div className="grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 gap-4">
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
              <img
                src="https://fegatravel.com/images/bali.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
              <img
                src="https://fegatravel.com/images/bali.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
              <img
                src="https://fegatravel.com/images/bali.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg "
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
              <img
                src="https://fegatravel.com/images/bali.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg "
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
              <img
                src="https://fegatravel.com/images/bali.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
              <img
                src="https://fegatravel.com/images/bali.jpg"
                alt="hero"
                className="object-cover w-full lg:h-full h-60 rounded-lg"
              />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-black/75">
                <div className="flex justify-center items-end h-3/4 text-center">
                  <div>
                    <p className="text-white text-xs md:text-sm font-bold">
                      Halo
                    </p>
                    <div className="flex pl-1 text-base justify-center mr-5">
                      <p className="text-white ml-2">halo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceList;
