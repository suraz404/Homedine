import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
      }}
      className="w-screen bg-[rgb(239,239,235)] "
      id="aboutus"
    >
      <div className="w-screen h-40 bg-[rgb(237,237,214)]">
        <img
          src="https://thecabinetdoctors.com/wp-content/uploads/2024/01/copper-pots-pans.jpg"
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
      <h1
        style={{
          fontFamily: "serif",
        }}
        className="text-5xl h-20 text-end pt-4 pr-4 mb-2"
      >
        About Us
      </h1>
      <div className="flex flex-col gap-3 p-3">
        <p className="w-80 ">
          <span className="text-[18px] font-semibold  ">Homedine</span> is more
          than kitchenware — it’s a space where everyday cooking becomes
          simpler, warmer, and more meaningful .
        </p>
        <p className="w-80">
          Here, home cooks, families, and food lovers come together. Some cook
          to nourish, some to celebrate, and many to find comfort in familiar
          flavors.
        </p>
      </div>
      <div className="flex gap-2 p-3 text-sm">
        <div className="flex flex-col gap-3">
          <p>
            We design kitchen tools for every pace slow mornings, busy
            afternoons, and shared dinners.
          </p>
          <p>
            Our mission is simple: to help you enjoy cooking, care for your
            home, and bring people together around food
          </p>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/51Di6Uy4LfL._AC_UF894,1000_QL80_.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="h-30 flex justify-center items-center p-4 text-center italic text-[18px] ">
        <p
          style={{
            fontFamily: "serif",
            fontStyle: "italic",
          }}
        >
          "Because when the kitchen feels right, everything else follows"
        </p>
      </div>

      <div className="w-screen h-40 bg-amber-500">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCrPZXsZw-oDc4U1Jp31malLmUit7U1ZC2w&s"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUs;
