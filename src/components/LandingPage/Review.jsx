import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCards from "../Products/ReviewCards";

const Review = () => {
  const [data, setData] = useState([]);

  const API = "https://homedine-backend-ahl6.onrender.com/review/";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(API);
        setData(res.data);
        console.log(res.data)
      } catch (err) {
        console.error(err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className=" h-[50vh] bg-[rgb(241,241,228)] mt-8 pt-2  ">

        <h1 className="text-2xl mb-2 p-3"> <span className="text-3xl">4.9</span>/5</h1>
        <div className="overflow-x-auto ">
    <div className=" h-[35vh] flex  flex-nowrap gap-6 z-10">
      {data.map((item) => (
        
        <ReviewCards key={item.id} userName={item.Users_Full_Name} userProfession ={item.User_Profession} userReview={item.User_Review}/>
       
      ))}
      </div>
    </div>
    </div>
  );
};

export default Review;
