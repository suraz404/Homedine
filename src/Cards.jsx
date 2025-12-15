export const Cards =({imageUrl , title , price,className})=>{
    return(
        <div className={`flex flex-col h-50 bg-[rgb(214,209,193)] shadow-green-950 rounded-sm overflow-hidden ${className}`} >

  <div className="h-1/2 w-full bg-amber-200">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover"
    />
  </div>


  <div className="flex flex-col p-2">
    <h2 className="text-[10px] font-light ">{title}</h2>
    <div className="flex justify-between items-center mt-4">
      <div className="text-sm font-semibold  ">${price}</div>
      <button className="bg-[rgb(11,30,22)] text-white rounded-sm hover:bg-green-600 text-[10px] px-2 py-1   ">
        Add to cart
      </button>
    </div>
  </div>
</div>

    )
}