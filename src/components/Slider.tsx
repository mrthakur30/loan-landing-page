import { useState, useRef, useEffect, FC } from "react";

interface SliderProps {
  images: string[];
}

const Slider: FC<SliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <div className="relative w-full my-10 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        ref={carouselRef}
      >
        {images.map((image, index) => (
          <div key={index} className="relative min-w-full">
            <img
              src={image}
              alt={`slide ${index + 1}`}
              loading="lazy"
              className=" w-full px-5 rounded h-auto"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 md:text-3xl shadow-md z-10"
      >
        &#10094; {/* Left arrow */}
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 md:text-3xl shadow-md z-10"
      >
        &#10095; {/* Right arrow */}
      </button>
      <div className="flex my-3 gap-1 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 w-1.5 rounded-full ${
              currentSlide === index ? "bg-slate-400" : "bg-gray-800"
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
