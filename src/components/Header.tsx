import React from "react";
import Logo from "../assets/navlogo.svg"
const Header: React.FC = () => {


    return (
        <header
            className={` top-0 w-full bg-emerald-800 p-4 transition-colors flex justify-center items-center duration-300 bg-opacity-50  backdrop-blur z-50`}
        >
            <div className="container flex items-center justify-evenly">
                <div className="flex md:gap-3 gap-2 font-semibold text-xl md:text-3xl">
                    <img src={Logo} alt="Logo" className="md:h-10 " />
                    <h1 className="md:text-2xl text-cyan-700">|</h1>
                    <h1 className=" text-zinc-800">Home Loans</h1>
                </div>


                <button type="button" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 ">

                    <a href="https://api.whatsapp.com/send?phone=+916363759171&text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Your%20Designs">
                        Apply
                    </a>
                </button>
            </div>
        </header >
    );
};

export default Header;
