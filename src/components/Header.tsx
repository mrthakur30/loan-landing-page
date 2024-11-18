import Logo from "../assets/navlogo.svg"
const Header = () => {


    return (
        <div className="fixed z-50 max-w-full hover:bg-green-300 p-3 px-4 mx-3 my-2 rounded-full shadow border-white backdrop-blur-lg">
        <div className="container flex items-center justify-evenly">
            <div className="flex md:gap-3 items-center justify-center gap-2 font-semibold text-xl md:text-2xl">
                <img src={Logo} alt="Logo" className="md:h-10 " />
                <h1 className="md:text-3xl text-3xl text-green-0 ">|</h1>
                <h1 className=" text-zinc-800 text-center">Home Loan</h1>
            </div>

            <button className="text-white border-2 md:text-xl ml-5 font-semibold border-green-1 grid justify-items-center bg-green-1 p-2.5 px-4 rounded-full ">
                <a href="https://api.whatsapp.com/send?phone=+916363759171&text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Your%20Designs">
                    Contact
                </a>
            </button>
        </div>
    </div >
    );
};

export default Header;
