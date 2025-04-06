"use client";
import CardCarousel from "@/components/CardCarousel";
import TitleCard from "@/components/TitleCard";

import {
  AlarmClockCheckIcon,
  ArrowUpFromLine,
  HouseIcon,
  Search,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

interface DataSet {
  id: number;
  imageURL: string;
  city: string;
  description: string;
}
interface CombinedData {
  cities: DataSet[];
  hotels: DataSet[];
  entertainment: DataSet[];
}

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const [data, setData] = useState<CombinedData>({
    cities: [],
    hotels: [],
    entertainment: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData({
        cities: jsonData.cities,
        hotels: jsonData.hotels,
        entertainment: jsonData.entertainment,
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <html>
        <head>
          <title> Traveling </title>
        </head>
        <body>
          <div className="flex flex-col items-center">
            <div className="w-full h-[600px] bg-fixed bg-cover bg-[url('/main_travel.jpg')] relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
                <div className="flex items-center bg-white rounded-lg w-full p-3">
                  <Search className="text-gray-500 mr-2" />

                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    className="w-full py-2 px-3 border border-gray-200 outline-none rounded-lg focus:ring-1 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between  mx-auto container">
            <div className="flex flex-col justify-between items-center mx-5 md:mx-0">
              <h2 className="text-4xl text-slate-800 font-bold mt-10 w-full">
                Popular Locations
              </h2>
              <h3 className="w-full text-2xl text-gray-400">
                A selection of quality accommodations with hospitable hosts
              </h3>
              <CardCarousel
                citiesData={data.cities}
                isSide={false}
                isGrid={false}
                haveBtn={false}
              />
            </div>

            <div className="flex gap-5 flex-wrap justify-center w-full mt-20 mx-auto">
              <div>
                <TitleCard
                  iconImg={<AlarmClockCheckIcon size={40} color="blue" />}
                  title={"24-hour reservations"}
                  des={"Online services available every day of the week"}
                />
              </div>
              <div>
                <TitleCard
                  iconImg={<ShieldCheck size={40} color="blue" />}
                  title={"Accommodation delivery guarantee"}
                  des={"Payment to the host after accommodation delivery"}
                />
              </div>
              <div>
                <TitleCard
                  iconImg={<HouseIcon size={40} color="blue" />}
                  title={"Low cost and high quality"}
                  des={"Higher quality stay at a lower cost"}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between items-center mx-5 md:mx-0">
              <h2 className="text-4xl text-slate-800 font-bold mt-20 text-left w-full">
                Best Hotels
              </h2>
              <h3 className="w-full text-2xl text-gray-400">
                A selection of quality accommodations with hospitable hosts
              </h3>
              <CardCarousel
                citiesData={data.hotels}
                isSide={false}
                isGrid={false}
                haveBtn={true}
              />
            </div>

            <div className="flex flex-col justify-between items-center mx-5 md:mx-0">
              <h2 className="text-4xl text-slate-800 font-bold mt-20 w-full">
                Best Entertainment Places
              </h2>
              <h3 className="w-full text-2xl text-gray-400">
                A selection of quality accommodations with hospitable hosts
              </h3>
              <CardCarousel
                citiesData={data.entertainment}
                isSide={true}
                isGrid={false}
                haveBtn={false}
              />
            </div>
          </div>
          {showScroll && (
            <button
              className="fixed bottom-5 right-5 border border-gray-400 bg-white text-gray-700 rounded-full p-3 shadow-lg cursor-pointer hover:border-gray-100 transition"
              onClick={scrollToTop}
            >
              <ArrowUpFromLine size={24} />
            </button>
          )}
        </body>
      </html>
    </>
  );
}
