import Logo from "../assets/navlogo.svg"
import { BiLogIn } from "react-icons/bi";
const Header = ({setOpen} : any) => {


    return (
        <div className="fixed md:px-16 w-full top-2 z-50 max-w-full md:backdrop-blur-0 md:rounded-none md:bg-white hover:bg-green-300 p-3 px-4 md:my-0 my-2 rounded-full shadow border-white backdrop-blur-lg">
        <div className="container flex items-center md:justify-between justify-evenly">
            <div className="flex md:gap-3 items-center justify-center gap-2 font-semibold text-xl md:text-2xl">
                <img src={Logo} alt="Logo" className="md:h-10 h-7" />
                <h1 className="md:text-3xl text-3xl text-green-0 ">|</h1>
                <h1 className=" text-zinc-800  text-center">Home Loan</h1>
            </div>

            <button type="button" onClick={setOpen} className="text-white border-2 md:text-xl ml-5 font-semibold hover:bg-green-1 transition-all grid justify-items-center bg-green-2 p-2.5 px-4 rounded-full ">
                <BiLogIn />
            </button>
        </div>
    </div >
    );
};

export default Header;
