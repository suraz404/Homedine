import React from 'react'

const CategoryCard = ({imageUrl,title}) => {
  return (
     <div className="relative  h-41 w-41 rounded-2xl overflow-hidden">
      
      {/* Image */}
      <img
        src={imageUrl}
        alt="kitchen"
        className="w-full h-full object-cover rounded-2xl"
      />

     

      <div className="absolute inset-0 
                      bg-linear-to-t 
                      from-black/70 via-black/40 to-transparent ">
                        
        
      </div>
       <p  className='text-1xl text-white absolute top-[56%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light font-Dancing Script'>Explore</p>
       <p style={{ fontFamily: 'cursive' }}  className='text-2xl text-white absolute top-[72%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light font-sans ]'  >{title}</p>
      <button className="text-[10px] absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[50%] rounded-2xl bg-[rgb(11,30,22)] px-1 py-1 text-white font-medium"> Shop Now </button>
      </div>

  )
}

export default CategoryCard