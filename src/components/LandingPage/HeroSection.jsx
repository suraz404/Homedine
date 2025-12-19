import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { ImLeaf } from "react-icons/im";
import { CiUser } from "react-icons/ci";
import "../../style.css";
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="h-screen w-screen bg-aliceblue mb-10">
        {/* Navbar */}
        <nav className="h-21 w-full flex items-center justify-between bg-[rgb(11,30,22)] px-4 text-white relative">
          <h1 className="text-4xl font-normal text-yellow-400 mx-2.5">
            Home<span className="italic text-white">dine</span>
          </h1>

          {/* Left: Menu */}
          <ul className="hidden md:flex items-center gap-10 text-lg">
            <li className="hover:text-yellow-400">
              <a href="#">Shop</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="#">BestSeller</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="#">Gallery</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="#">About</a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <IoCartOutline className="text-2xl" />
            <CiUser className="text-2xl" />

            <button
              className="text-2xl md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div
            className={`md:hidden absolute left-0 top-full w-full bg-[rgb(11,30,22)]
    transition-all duration-200 ${
      isOpen ? "max-h-64 py-4" : "max-h-0 overflow-hidden"
    }`}
          >
            <ul className="flex flex-col items-center gap-4 text-lg">
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">BestSeller</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Content */}
        <section
          className="h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dc9vqih9p/image/upload/v1765806824/heroformobile_slrxdk.png')",
          }}
        >
          <div className="w-[80vw]  p-2.5 ml-6 mt-45 gap-6 md:w-[40vw]">
            <h2 className="text-[300%] leading-12 text-white font-semibold">
              Eco-friendly{" "}
              <span
                style={{ fontFamily: "cursive" }}
                className="text-[rgb(255,255,213)]"
              >
                Kitchenware
              </span>
            </h2>

            <p className=" text-[100%] text-white mt-4 md:hidden">
              The eco-friendly kitchenware which use a sense of urgency to make
              a beautiful, sustainable home.
            </p>
            <p className=" hidden md:block text-[18px] text-white mt-4 ">
              The eco-friendly kitchenware which use a sense of urgency to make
              a beautiful, sustainable home.Experience the eco-friendly
              kitchenware that brings beauty.
            </p>

            <button className="mt-9 px-9 py-2 text-[rgb(11,30,22)] rounded-[20px] bg-[rgb(255,255,213)] relative">
              Shop Now{" "}
              <span className="text-md text-center absolute pr-2  top-2.5 right-1">
                →
              </span>
            </button>
          </div>
        </section>
        <div className="flex justify-around mt-6 p-3">
          <div className="h-12 w-30 flex justify-center items-center p-2.5 text-[12px] gap-1.5 rounded-[20px] bg-white text-center">
            <span className="text-green-400">
              <ImLeaf />
            </span>
            Natural Finish
          </div>
          <div className="h-12 w-33 flex justify-center items-center p-2.5 text-[12px] gap-1.5 rounded-[20px] bg-white text-center">
            <span className="text-green-400">
              <ImLeaf />
            </span>{" "}
            Eco innovation
          </div>
          <div className="h-12 w-33 flex justify-center items-center p-2.5 text-[12px] gap-1.5 rounded-[20px] bg-white text-center">
            <span className="text-green-400">
              <ImLeaf />
            </span>{" "}
            Sustainable Material
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
