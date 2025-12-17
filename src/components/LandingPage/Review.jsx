import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCards from "../Products/ReviewCards";

const Review = () => {
  const [data, setData] = useState([]);
  const [newReview, setnewReview] = useState("");

  const API = "https://homedine-backend-ahl6.onrender.com/review/";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(API);
        setData(res.data.results);
        console.log(res.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReviews();
  }, []);
  const handleNewreview = async (e) => {
    e.preventDefault();

    if (!newReview.trim()) return;

    try {
      const res = await axios.post(API, {
        User_Review: newReview,
        Users_Full_Name: "Anonymous",
        User_Profession: "Customer",
      });

      setData((prev) => [res.data, ...prev]);

      setnewReview("");
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div className=" bg-[rgb(233,237,214)] mt-8 mb-2 pt-2  ">
      <div className="flex  items-center w-[80%] m-6">
        ☆{" "}
        <h1 style={{ fontFamily: "cursive" }} className="text-2xl mb-2 p-3 ">
          {" "}
          <span style={{ fontFamily: "cursive" }} className="text-5xl  ">
            4.9
          </span>
          /5
        </h1>
        <p className="text-[12px] mt-3 ">
          More than <span className="font-semibold">25,000</span> 5-Star Reviews
          for Our Award-Winning Eco Products ˚⋆𐙚｡⋆𖦹
        </p>
      </div>
      <div className="overflow-x-auto overflow-y-hidden no-x-scrollbar ">
        <div className=" flex  flex-nowrap gap-6 z-10">
          {data.map((item) => (
            <ReviewCards
              key={item.id}
              userName={item.Users_Full_Name}
              userProfession={item.User_Profession}
              userReview={item.User_Review}
            />
          ))}
        </div>
      </div>
      <form className="h-[40vh] w-screen flex flex-col justify-center items-center ">
        <textarea
          placeholder="Write your review..."
          rows={5}
          cols={20}
          className="border-2 p-2 w-[50vw]"
          onChange={(e) => {
            setnewReview(e.target.value);
          }}
          value={newReview}
        />
        <button
          type="submit"
          className="mt-4 w-20 rounded-2xl bg-[rgb(11,30,22)] py-1 text-white font-medium"
          onClick={handleNewreview}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Review;
