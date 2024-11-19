
import Form from "../components/Form"
import Header from "../components/Header"
import { BiHome } from "react-icons/bi";
import { MdRoomPreferences } from "react-icons/md";
import { GrHomeOption } from "react-icons/gr";
import image from "../assets/homeloan.jpg"
import Footer from "../components/Footer";
import { useState } from "react";

const Main = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="w-full min-h-screen bg-green-4 ">
      <Header onClick={()=>setShowForm(true)} />
      {showForm && (
        <div className=" z-[40] w-full fixed h-full">
          <Form />
        </div>
      )}

      <div className="md:ml-8 md:pt-28 pt-20 flex justify-center md:justify-start items-center">
        <p className=" font-semibold md:text-2xl rounded-3xl bg-gradient-to-r my-7 from-green-1 px-2 py-1 to-transparent text-center">Exciting Home Loan Offers from 90+ Banks in India</p>
      </div>

      <img src={image}   className="hidden h-56 rounded-lg md:block absolute right-36 top-36" alt="" />

      <div className="md:ml-8 mx-4 flex md:flex-row flex-col justify-center md:justify-start items-start  md:gap-7 ">
        <span className="text-2xl font-bold ">
          <span className="text-green-2"> Design Elementary </span>
          offers  a wide <br /> range of  loans to  meet <br /> your diverse needs.
        </span>
        <button onClick={() => setShowForm(true)}
          className="flex text-xl w-36 mt-5 md:mt-0 shadow-md shadow-green-2 rounded-2xl justify-center items-center  bg-green-3 text-green-0 md:px-4 px-3 py-2 font-semibold">
          <span>
            Get Loan
          </span>
        </button>
      </div>

      <div className="">

      </div>


      <div className="py-10 w-full p-4 md:px-8 flex flex-col gap-3 justify-start">
        <h1 className="text-3xl font-bold text-left">Design AI <br /> Features</h1>
        <p className="text-gray-400 font-semibold">Enhance your image's resolution and achieve crisp, <br /> clear quality with a single click.</p>
        <button onClick={() => setShowForm(true)}
          className="flex rounded-2xl text-lg justify-center w-36 items-center text-green-3 bg-green-1 px-2 py-2 font-semibold">
          Get Loan Now !
        </button>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full bg-zinc-300 border border-green-0  hover:shadow-green-1 transition-all shadow-md bg-opacity-30 p-6 b rounded-2xl">
            <BiHome color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5">Interior Loan</h1>
            <p className="font-semibold mt-2 text-gray-400">Variety of settings to generate perfect interior for your needs.</p>
          </div>
          <div className="w-full bg-zinc-300 border border-green-0  hover:shadow-green-1 transition-all shadow-md bg-opacity-30  p-6  rounded-2xl">
            <MdRoomPreferences color="#B1E182" size={45} />
            <h1 className="text-xl font-semibold mt-5">Home Loan</h1>
            <p className="font-semibold mt-2 text-gray-400">
              Upload an image of your room and our AI will restyle it with your chosen design preferences.
            </p>
          </div>
          <div className="w-full bg-zinc-300 border border-green-0  hover:shadow-green-1 transition-all shadow-md bg-opacity-30 p-6  rounded-2xl">
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

    </main>
  )
}

export default Main
