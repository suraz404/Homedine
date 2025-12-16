
import React from 'react'
import {Cards} from "../Products/Cards"




export const BestSelling = () => {

    const BestSellerProduct =[];

  return (
    <section className=" p-5 ">
      <h1 className="text-2xl">BestSelling Product</h1>

      <div className="mt-6 mb-6 flex flex-col  items-center gap-4 w-full">
        <Cards
          imageUrl="https://images.summitmedia-digital.com/cosmo/images/2020/07/10/silicone-baking-tools-1594355822.jpg"
          title="Thermas"
          price="30"
        />

        <Cards
          imageUrl="https://i.pinimg.com/736x/97/ad/97/97ad97987312054272d55b9f784d826a.jpg"
          title="Kettle"
          price="30"
        />
        <Cards
          imageUrl="https://m.media-amazon.com/images/I/81A7jCvfy4L._AC_UF894,1000_QL80_.jpg"
          title="Kettle"
          price="30"
        />
         <Cards
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7KTn5i-J3MMQzbWhvqmwn3wfafnJf7zniYw&s"
          title="Thermas"
          price="30"
        />
      </div>
    </section>
  );
};
