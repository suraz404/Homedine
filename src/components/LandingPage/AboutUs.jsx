import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div
        style={{
          fontFamily: "sans-serif",
        }}
        className="w-screen bg-[rgb(239,239,235)] md:hidden "
        id="aboutus"
      >
        <div className="w-screen h-40 ">
          <img
            src="https://thecabinetdoctors.com/wp-content/uploads/2024/01/copper-pots-pans.jpg"
            alt="image"
            className="h-full w-full md:w-[30vw] object-cover md:h-[30vh] "
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
        <div className="flex flex-col gap-3 p-3 md:items-center md:text-[20px] font-light">
          <p className="w-80 md:w-90 md:ml-15 ">
            <span className="text-[18px] font-semibold  ">Homedine</span> is
            more than kitchenware — it’s a space where everyday cooking becomes
            simpler, warmer, and more meaningful .
          </p>
          <p className="w-80 md:w-90 md:ml-15">
            Here, home cooks, families, and food lovers come together. Some cook
            to nourish, some to celebrate, and many to find comfort in familiar
            flavors.
          </p>
        </div>
        <div className="flex  md:flex-col gap-2 p-3 text-sm md:text-[20px]">
          <div className="flex flex-col  gap-3 md:items-center justify-center">
            <p className="md:w-90 md:ml-15">
              We design kitchen tools for every pace slow mornings, busy
              afternoons, and shared dinners.
            </p>
            <p className="md:w-90 md:ml-15">
              Our mission is simple: to help you enjoy cooking, care for your
              home, and bring people together around food
            </p>
          </div>
          <div className="md:flex justify-end">
            <img
              src="https://m.media-amazon.com/images/I/51Di6Uy4LfL._AC_UF894,1000_QL80_.jpg"
              alt=""
              className=" md:w-[20vw]"
            />
          </div>
        </div>
        <div className="h-30 flex justify-center items-center p-4 text-center italic text-[18px] md:text-[23px] ">
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

      <div className=" hidden md:flex md:w-full ">
        <div className="w-[20%] p-6">
          <img
            src="https://besontique.com/cdn/shop/files/nordic-unique-design-printed-ceramic-coffee-mug-cup-with-gold-spoon-aesthetic-decorative-kitchenware-besontique-home-91925.jpg?v=1760348855"
            alt=""
          />
        </div>
        <div className="w-[55%] flex flex-col gap-6 pt-33 p-6 ">
          <p className="text-2xl font-extralight w-[35vw] ">
            Homedine is a modern kitchenware brand built around the heart of the
            home—the kitchen.
          </p>
          <p className="text-[16px]">
            At Homedine, we understand that every kitchen has its own rhythm.
            Some days are slow and quiet, others are fast and full of movement.
            Our tools are thoughtfully crafted to adapt to every pace of life,
            making cooking feel easier, more enjoyable, and less overwhelming no
            matter the moment.
          </p>
          <p>
            Quality and simplicity guide everything we create. From durable
            materials to timeless designs, our kitchenware is made to last and
            to fit naturally into your home. We focus on functionality without
            sacrificing comfort or style, so every piece feels familiar,
            reliable, and pleasant to use.
          </p>
          <p>
            More than just products, Homedine is about connection. It’s about
            families gathering around the table, friends sharing laughter, and
            comfort found in home-cooked flavors. Our kitchenware supports those
            shared moments, helping bring people together through food and care.
          </p>
          <p>
            At its core, Homedine exists to make everyday cooking feel right.
            Because when your kitchen feels calm, warm, and welcoming, it
            reflects throughout your home. And when the kitchen feels right,
            everything else follows.
          </p>
        </div>
        <div className="w-[25%] flex flex-col justify-between p-6">
          <h1
            style={{
              fontFamily: "cursive",
            }}
            className="text-5xl"
          >
            About Us{" "}
          </h1>
          <img
            src="https://www.blackcarrot.in/cdn/shop/articles/Ceramic-Coffee-Mugs-Discover-Stylish-Durable-Aesthetic-Cups-for-Every-Mood-BlackCarrot-4773560.png?v=1746092889"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
