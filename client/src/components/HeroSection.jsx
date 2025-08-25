import React from "react";
//import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const slides = [
  {
    image: "/backgroundImage.png",
    title: "Guardians of the Galaxy",
    description:
      "A sci-fi action-adventure film that follows a group of intergalactic misfits who come together to stop a powerful villain from destroying the galaxy.",
    year: "2018",
    duration: "2h 16m",
    genres: "Action | Adventure | Sci-Fi",
    logo: assets.marvelLogo,
  },
  {
    image: "/ballerina.jpg",
    title: "Ballerina",
    description:
      "An assassin trained in the traditions of the Ruska Roma organization sets out to seek revenge after her father's death.",
    year: "2025",
    duration: "2h 4m",
    genres: "Action | Thriller | Drama",
  },
  {
    image: "/superman.jpg",
    title: "Superman",
    description:
      "Superman must reconcile his alien Kryptonian heritage with his human upbringing as reporter Clark Kent. As the embodiment of truth, justice and the human way he soon finds himself in a world that views these as old-fashioned.",
    year: "2025",
    duration: "2h 25m",
    genres: "Action | Adventure | Sci-Fi",
    logo: assets.dclogo,
  },
];

const HeroSection = () => {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    // <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
    <div
      className="flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 h-screen transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={slide.logo} alt="" className="max-h-11 lg:h-11 mt-20" />
      <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
        {/* Guardians <br /> of the Galaxy */}
        {slide.title}
      </h1>
      <div className="flex items-center gap-4 text-gray-300">
        <span>{slide.genres}</span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" /> {slide.year}
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5" /> {slide.duration}
        </div>
      </div>

      <p className="max-w-md text-gray-300">{slide.description}</p>

      <button
        onClick={() => navigate("/movies")}
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
      >
        Explore Movies
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeroSection;
