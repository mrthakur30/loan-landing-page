
import Form from "../components/Form"
import Header from "../components/Header"
import { CgArrowRight } from "react-icons/cg";
import { BiHome } from "react-icons/bi";
import { MdRoomPreferences } from "react-icons/md";
import { GrHomeOption } from "react-icons/gr";
import image from "../assets/homeloan.jpg"
import Footer from "../components/Footer";
import { useState } from "react";

const Main = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="w-full min-h-screen  flex flex-col ">
      <Header />

      <div className="relative w-full mt-20 flex flex-col justify-center items-center">

        <img src={image} className="rounded" alt="" />
        <p className=" font-semibold rounded-3xl bg-gradient-to-r my-5 from-green-1 px-2 py-1 to-transparent text-center">
          Exciting Home Loan Offers from 90+ Banks in India
        </p>
      </div>

      <div className="flex flex-col gap-5 ml-5">
        <span className="text-2xl font-bold ">
          <span className="text-green-2"> Design Elementary </span>
          offers  a wide <br /> range of  loans to  meet <br /> your diverse needs.
        </span>
        <button onClick={()=>setShowForm(true)} className="flex rounded-2xl w-36 justify-center items-center  bg-green-3 text-green-0  py-2 font-semibold">
          <span>
            Get Loan
          </span>
          <span className="hover:translate-x-2 transition-all">
            <CgArrowRight size={25} />
          </span>
        </button>
      </div>
      <div className="">

      </div>


      <div className="py-10 w-full p-4 flex flex-col gap-3 justify-start">
        <h1 className="text-3xl font-bold text-left">Design AI <br /> Features</h1>
        <p className="text-gray-400 font-semibold">Enhance your image's resolution and achieve crisp, <br /> clear quality with a single click.</p>
        <button onClick={()=>setShowForm(true)} className="flex rounded-2xl text-lg justify-center w-36 items-center text-green-3 bg-green-1 px-2 py-2 font-semibold">
          Get Loan Now !
        </button>

        <div className="flex flex-col gap-4">
          <div className="w-full bg-blue-50 border border-green-2 shadow-md bg-opacity-30 p-6 b rounded-2xl">
            <BiHome color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5">Interior Loan</h1>
            <p className="font-semibold mt-2 text-gray-400">Variety of settings to generate perfect interior for your needs.</p>
          </div>
          <div className="w-full bg-blue-50 border border-green-2 shadow-md bg-opacity-30  p-6  rounded-2xl">
            <MdRoomPreferences color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5">Home Loan</h1>
            <p className="font-semibold mt-2 text-gray-400">
              Upload an image of your room and our AI will restyle it with your chosen design preferences.
            </p>
          </div>
          <div className="w-full bg-blue-50 border border-green-2 shadow-md bg-opacity-30 p-6  rounded-2xl">
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

      <Footer />
      {showForm && (
        <div className=" z-[40] w-full fixed h-full">
          <Form />
        </div>
      )}
    </main>
  )
}

export default Main
