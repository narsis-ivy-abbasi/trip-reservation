import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

export default function Rent() {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="mb-20 ">
      <h2 className="text-4xl text-indigo-800 font-bold mt-20 w-full">
        Rent a villa
      </h2>
      <p className="text-justify mt-4">
        Travel is in the blood of us Iranians, and some of the best memories of
        our lives are made during our trips, especially when traveling with
        family or close friends. Whether you are renting a villa in the north, a
        suite in Kish, or a suite in Isfahan or Shiraz, whether it is a villa
        with a pool, a cozy forest cabin, or a beachfront property, whether
        {!show && "..."}
        {show && (
          <>
            you are looking for a budget-friendly place or a luxurious and
            upscale villa, whatever type of accommodation you have in mind and
            at any price range, you can find it on Ivy. You can read reviews
            from previous guests and finally book your ideal stay online with
            one of Ivy&apos;s hundreds of thoughtful and trustworthy hosts. And
            rest assured, the entire Ivy team will be with you every step of
            your journey. 😊
          </>
        )}
      </p>
      {!show && (
        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 text-indigo-800 px-4 py-2 rounded cursor-pointer transition"
            onClick={handleShow}
          >
            See More
            <AiOutlineDown size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
