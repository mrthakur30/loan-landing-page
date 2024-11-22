
import Form from "../components/Form"
import Header from "../components/Header"
import Footer from "../components/Footer";
import { useState } from "react";
import ImageSlider from "../components/Slider";
import FAQSection from "../components/FAQ";
import { ArrowTrendingUpIcon, CheckCircleIcon, ClockIcon, DocumentTextIcon, HomeIcon } from "@heroicons/react/16/solid";
import { HiOfficeBuilding } from "react-icons/hi";

const Main = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="w-full min-h-screen  bg-white ">
      <Header setOpen={() => setShowForm(true)} />
      {showForm && (
        <div className=" backdrop-blur-lg bg-green-50/70 px-4 z-[40] flex items-center justify-center w-full fixed h-full">
          <Form />
        </div>
      )}


      <div className="mx-4 md:pt-28 pt-16 md:mx-36 ">
      <ImageSlider />
      </div>

      <div className="md:h-[80%] md:mt-10 my-5 md:px-0 flex flex-col-reverse md:flex-row justify-center gap-10 px-4 md:justify-between main md:mx-36 ">
        <div className=" md:px-0 flex flex-col gap-4 md:gap-8 ">
          <div className=" flex  md:justify-start md:items-center">
            <p className=" font-semibold md:text-2xl  text-green-700 rounded-3xl bg-gradient-to-r from-green-2 px-5 py-2 to-transparent">Exciting Home Loan Offers from 90+ Banks in India</p>
          </div>
          <span className=" text-2xl md:text-4xl font-bold ">
            <span className="text-green-2"> Design Elementary </span>
            offers  a wide <br /> range of  loans to  meet <br /> your diverse needs.
          </span>
          <button
            onClick={() => setShowForm(true)}
            className="flex md:text-2xl w-28 md:w-44 hover:shadow transition-all  shadow-green-2 rounded-3xl justify-center items-center  bg-green-2 text-white first-line:md:px-4 px-4 py-2 font-semibold">
            <span>
              Get Loan
            </span>
          </button>
        </div>
        <div className="md:w-1/3">
          <Form />
        </div>

      </div>

      {/* Features Section */}
      <div className="flex flex-col md:mx-36 mx-4  gap-6">
        <h1 className="text-3xl font-bold text-left">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Feature 1 */}
          <div className="w-full bg-white border border-gray-300 hover:shadow-green-2 transition-all shadow-md p-6 rounded-2xl">
            <CheckCircleIcon className="text-green-700 w-12 h-12" />
            <h1 className="text-xl font-semibold mt-5">Best Interest Rates</h1>
            <p className="font-semibold mt-2 text-gray-500">
              Access loans with competitive interest rates tailored to your needs.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="w-full bg-white border border-gray-300 hover:shadow-green-2 transition-all shadow-md p-6 rounded-2xl">
            <ArrowTrendingUpIcon className="text-green-700 w-12 h-12" />
            <h1 className="text-xl font-semibold mt-5">Flexible Repayments</h1>
            <p className="font-semibold mt-2 text-gray-500">
              Enjoy repayment options that fit your financial situation.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="w-full bg-white border border-gray-300 hover:shadow-green-2 transition-all shadow-md p-6 rounded-2xl">
            <ClockIcon className="text-green-700 w-12 h-12" />
            <h1 className="text-xl font-semibold mt-5">Quick Approvals</h1>
            <p className="font-semibold mt-2 text-gray-500">
              Get your loans approved in record time with minimal documentation.
            </p>
          </div>
        </div>
        <button onClick={() => setShowForm(true)}
          className="flex rounded-3xl text-lg justify-center w-44 items-center text-white bg-green-3 px-3 py-2 font-semibold">
          Get Loan Now !
        </button>
      </div>

      {/* How it Works Section */}
      <div className="flex flex-col md:mx-36 mx-4 mt-10 gap-6">
        <h1 className="text-3xl font-bold text-left">How It Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="w-full bg-white border border-gray-300 hover:shadow-green-2 transition-all shadow-md p-6 rounded-2xl">
            <DocumentTextIcon className="text-green-700 w-12 h-12" />
            <h1 className="text-xl font-semibold mt-5">Interior Loan</h1>
            <p className="font-semibold mt-2 text-gray-500">
              Choose from a variety of settings to generate the perfect interior for
              your needs.
            </p>
          </div>
          {/* Card 2 */}
          <div className="w-full bg-white border border-gray-300 hover:shadow-green-2 transition-all shadow-md p-6 rounded-2xl">
            <HomeIcon className="text-green-700 w-12 h-12" />
            <h1 className="text-xl font-semibold mt-5">Home Loan</h1>
            <p className="font-semibold mt-2 text-gray-500">
              Enjoy fast approvals and tailored solutions for building your dream
              home.
            </p>
          </div>
          {/* Card 3 */}
          <div className="w-full bg-white border border-gray-300 hover:shadow-green-2 transition-all shadow-md p-6 rounded-2xl">
            <HiOfficeBuilding className="text-green-700 w-12 h-12" />
            <h1 className="text-xl font-semibold mt-5">Loan Against Property</h1>
            <p className="font-semibold mt-2 text-gray-500">
              Secure loans against your property with flexible terms.
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
