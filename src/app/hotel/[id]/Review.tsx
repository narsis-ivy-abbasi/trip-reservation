import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ReviewProp {
  userImg: string;
  name: string;
  time: string;
  comment: string;
  starRate: string;
}
const Review:React.FC<{review:ReviewProp}> = ({ review }) => {
  return (
    <div className="flex mt-5 gap-5">
      <div className="w-14 h-14">
        <Image
          src={review.userImg}
          alt="image"
          width={150}
          height={150}
          className="w-full h-full rounded-full  shadow-lg object-cover"
        />
      </div>
      <div className="mb-10">
        <h3 className="font-semibold">{review.name}</h3>
        <div className="text-slate-400">{review.time} minutes ago</div>
        <div className="mt-4 text-slate-800 ">{review.comment}</div>
        <div className="flex gap-2 items-center ">
          {review.starRate} 
          <Star size={22} fill="rgb(59,130,246)" color="rgb(59,130,246)" />
        </div>
      </div>
    </div>
  );
};

export default Review;
