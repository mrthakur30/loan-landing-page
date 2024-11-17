
import Form from "../components/Form"
import Header from "../components/Header"
import image from "../assets/homeloan.jpg"
import Slider from "../components/Slider";

const data = [
    'demo1.jpeg',
    'demo2.jpg',
    'demo3.jpeg',   
];

const Main = () => {

  return (
    <main className="w-full min-h-screen">
      <Header />
      <div className="relative">
        <h1 className="md:text-6xl text-white text-2xl absolute top-1/12 p-10 ">Avail attrative  interest rates <br /> by our loan</h1>
        <img src={image} className="w-screen" alt="" />
        <div className="md:absolute top-0 right-44 z-40">
        <Form />
        </div>
      </div>

      {/* Features */}
      <div className="py-10">
         <h1 className="text-xl md:text-5xl font-semibold px-10 text-zinc-800">Features and Benefits</h1>
         <Slider images={data} />
      </div>

      {/* Types */}

      <div>

      </div>

      {/* FAQ */}
      <div>

      </div>

      <footer className="h-14 fixed bottom-0 bg-emerald-400 w-full flex items-center justify-center">
       <h1  className="text-center text-3xl font-semibold"> Get Loan</h1>
      </footer>
    </main>
  )
}

export default Main
