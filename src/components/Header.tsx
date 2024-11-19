import React from "react";
import Logo from "../assets/navlogo.svg"
import { BiPhoneCall } from "react-icons/bi";
const Header: React.FC = () => {


    return (
        <div className="fixed md:left-1/3 md:w-auto w-full top-2 z-50 max-w-full hover:bg-green-300 p-3 px-4  my-2 rounded-full shadow border-white backdrop-blur-lg">
        <div className="container flex items-center justify-evenly">
            <div className="flex md:gap-3 items-center justify-center gap-2 font-semibold text-xl md:text-2xl">
                <img src={Logo} alt="Logo" className="md:h-10 h-7" />
                <h1 className="md:text-3xl text-3xl text-green-0 ">|</h1>
                <h1 className=" text-zinc-800  text-center">Home Loan</h1>
            </div>

            <button type="button" className="text-white border-2 md:text-xl ml-5 font-semibold border-green-1 hover:bg-green-2 transition-all grid justify-items-center bg-green-1 p-2.5 px-4 rounded-full ">
                <a href="https://api.whatsapp.com/send?phone=+916363759171&text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Your%20Designs">
                    <BiPhoneCall />
                </a>
            </button>
        </div>
    </div >
    );
};

export default Header;
