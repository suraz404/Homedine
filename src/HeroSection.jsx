import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import {IoClose} from "react-icons/io5";
import { ImLeaf } from "react-icons/im";
import "./style.css"

const HeroSection = () => {

  const [isOpen , setIsOpen]=useState(false)
  return (
    <>
    <section className="h-screen w-screen bg-aliceblue ">
      
      {/* Navbar */}
      <nav className="h-[9%] w-full flex items-center justify-around bg-[rgb(11,30,22)] text-[20px] relative">
        <button className="text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)} >
        {isOpen ? <IoClose className="text-white" /> : <RxHamburgerMenu className="text-white text-2xl" />}
        </button>

        <h1 className="text-[30px] font-normal text-yellow-400 mx-2.5">Home<span className="italic text-white">dine</span>
        </h1>

        <IoCartOutline className="text-white text-2xl" />
        <div
          className={`md:hidden absolute left-0 top-full w-full bg-[rgb(11,30,22)]
          transition-all duration-200 ${
            isOpen ? "max-h-65 py-4" : "max-h-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 text-lg text-white ">
            <li className="hover:text-[19px]"><a href="#">Home</a></li>
            <li className="hover:text-[19px]"><a href="#">Shop</a></li>
            <li className="hover:text-[19px]"><a href="#">About</a></li>
           <li className="hover:text-[19px]"><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <section
        className="h-[60vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center"
        style={{ backgroundImage: "url('./heroformobile.webp')" }}
      >
        <div className="w-[80vw] p-2.5 mt-45 gap-3.5">
          <h2 className="text-[50px] leading-12 text-white font-bold">
            Eco-friendly Kitchenware
          </h2>

          <p className="text-white mt-2">
            The eco-friendly kitchenware which use a sense of urgency to make a
            beautiful, sustainable home.
          </p>

          <button className="mt-5 px-9 py-2 bg-[rgb(11,30,22)] rounded-[20px] text-white">
            Shop Now
          </button>
        </div>
      </section>
      <div className="m-2.5 flex justify-around">
        <div className="h-12 w-30 flex justify-center items-center p-2.5 text-[12px] gap-1.5 rounded-[20px] bg-white text-center"><span className="text-green-400"><ImLeaf/></span>Natural Finish</div>
        <div className="h-12 w-30 flex justify-center items-center p-2.5 text-[12px] gap-1.5 rounded-[20px] bg-white text-center"><span className="text-green-400"><ImLeaf/></span> Eco innovation</div>
        <div className="h-12 w-30 flex justify-center items-center p-2.5 text-[12px] gap-1.5 rounded-[20px] bg-white text-center"><span className="text-green-400"><ImLeaf/></span> Sustainable Material</div>
      </div>
      
    </section>
    
    </>
  );
};

export default HeroSection;
