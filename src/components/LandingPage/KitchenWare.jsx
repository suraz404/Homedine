import React from "react";

const KitchenWare = () => {
  return (
    <div className="relative w-full h-150   overflow-hidden">
      {/* Image */}
      <img
        src="https://i.pinimg.com/1200x/ca/58/fa/ca58fae9446b69c525f9d33cd0f19eeb.jpg"
        alt="kitchen"
        className="w-full h-full object-cover"
      />

      <div
        className="absolute inset-0 
                      bg-linear-to-t 
                      from-black/80 via-black/40 to-transparent "
      ></div>

      {/* Text */}
      <p
        className="absolute bottom-20 md:bottom-44  left-0 right-0 
                    text-white text-[15px] p-4 
                    font-light italic 
                   z-10 md:w-[50vw] w-[80vw]"
      >
        <strong className="text-2xl text-amber-300">Homedine</strong> brings
        thoughtfully designed kitchenware that blends quality, functionality,
        and style—made to simplify everyday cooking.
      </p>
    </div>
  );
};

export default KitchenWare;
