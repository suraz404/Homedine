import React from 'react'

const ReviewCards = ({userName,userReview,userProfession}) => {
  return (
    <div className="min-w-[320px] bg-white rounded-2xl p-6 shadow-sm">
      
   
      <div style={{ fontFamily: 'cursive' }} className="text-5xl text-amber-900 leading-none ">
        “
      </div>

     <div className='h-[80%] flex flex-col justify-between'>
      <p className="text-green-900 text-lg leading-tight text-center mb-10">
        {userReview}
      </p>
      


      <div>
        <p className="text-green-900 font-semibold text-lg">
          {userName}
        </p>
        <p className="text-green-700 italic text-sm">
          {userProfession}
        </p>
      </div>
      </div>
    </div>
  )
}

export default ReviewCards