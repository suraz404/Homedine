export const Cards = ({ imageUrl, title, price }) => {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-white p-4 shadow-md">
      
    
      <div className="relative rounded-2xl bg-gray-100 p-0.5">
        
     
        <span className="absolute top-4 left-4  mt-2 rounded-full bg-white px-4 py-1 text-sm shadow">
          Best Seller
        </span>

  

    
        <img
          src={imageUrl}
          alt={title}
          className=" h-full w-full object-cover rounded-2xl"
        />

       
      </div>

    
      <div className="mt-4">
        <p className="text-green-600 text-sm">Kitchen</p>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-xl font-bold">${price}</p>
      </div>


      <button className="mt-4 w-full rounded-2xl bg-[rgb(11,30,22)] py-3 text-white font-medium">
        Add to Cart
      </button>
    </div>
  );
};


