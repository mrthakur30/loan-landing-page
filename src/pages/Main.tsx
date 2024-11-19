
import Form from "../components/Form"
import Header from "../components/Header"
import { BiHome } from "react-icons/bi";
import { MdRoomPreferences } from "react-icons/md";
import { GrHomeOption } from "react-icons/gr";
import Footer from "../components/Footer";
import { useState } from "react";
import ImageSlider from "../components/Slider";
import { TiTick, TiTickOutline } from "react-icons/ti";
import FAQSection from "../components/FAQ";

const Main = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="w-full min-h-screen  bg-white ">
      <Header setOpen={() => setShowForm(true)} />
      {showForm && (
        <div className=" z-[40] w-full fixed h-full">
          <Form />
        </div>
      )}



      <div className="md:h-[80%] main flex flex-col md:flex-row justify-center px-4 md:justify-between main md:pr-16 md:pl-36 ">
        <div className=" md:px-0 flex flex-col pt-16  md:pt-36  gap-8 ">
          <div className="main ">
            <ImageSlider />
          </div>
          <div className=" flex  md:justify-start md:items-center">
            <p className=" font-semibold md:text-2xl text-xl text-green-700 rounded-3xl bg-gradient-to-r from-green-2 px-5 py-2 to-transparent">Exciting Home Loan Offers from 90+ Banks in India</p>
          </div>
          <span className=" text-4xl md:text-4xl font-bold ">
            <span className="text-green-2"> Design Elementary </span>
            offers  a wide <br /> range of  loans to  meet <br /> your diverse needs.
          </span>
          <button
            onClick={() => setShowForm(true)}
            className="flex text-2xl  md:w-44 hover:shadow transition-all  shadow-green-2 rounded-3xl justify-center items-center  bg-green-2 text-white first-line:md:px-4 px-4 py-2 font-semibold">
            <span>
              Get Loan
            </span>
          </button>
        </div>
        <div className="md:w-1/3">
          <Form />
        </div>
        <div>
        </div>
      </div>





      <div className="py-10 w-full p-4 md:pl-36  flex flex-col gap-3 justify-start">
        <h1 className="text-3xl font-bold text-left">Home Loans Simplified</h1>
        <ul className=" text-gray-600 mb-6 text-lg">
          <span className="flex font-light text-lg gap-2 items-center">
            <TiTick size={25} />
            Best Interest Rates

          </span>
          <span className="flex font-light text-lg gap-2 items-center">
          <TiTick size={25} />
            Fast Approval Process

          </span>
          <span className="flex font-light text-lg gap-2 items-center">
          <TiTick size={25} />
            Tailored for Constraction
          </span>
        </ul>
        <button onClick={() => setShowForm(true)}
          className="flex rounded-3xl text-lg justify-center w-44 items-center text-white bg-green-3 px-3 py-2 font-semibold">
          Get Loan Now !
        </button>

        <div className="flex mt-8 flex-col md:flex-row gap-4">
          <div className="w-full bg-white border border-green-1  hover:shadow-green-2 transition-all shadow-md bg-opacity-30 p-6 b rounded-2xl">
            <BiHome color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5">Interior Loan</h1>
            <p className="font-semibold mt-2 text-gray-400">Variety of settings to generate perfect interior for your needs.</p>
          </div>
          <div className="w-full bg-white border border-green-1  hover:shadow-green-2 transition-all shadow-md bg-opacity-30  p-6  rounded-2xl">
            <MdRoomPreferences color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5">Home Loan</h1>
            <p className="font-semibold mt-2 text-gray-400">
              Upload an image of your room and our AI will restyle it with your chosen design preferences.
            </p>
          </div>
          <div className="w-full bg-white border border-green-1  hover:shadow-green-2 transition-all shadow-md bg-opacity-30 p-6  rounded-2xl">
            <GrHomeOption color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5">Loan Against Property</h1>
            <p className="font-semibold mt-2 text-gray-400">
              No matter what type of room you're designing, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>

      </div>
      
      <FAQSection />

      <Footer />

    </main>
  )
}

export default Main
