"use client";
import {
  BedDouble,
  Dumbbell,
  Fish,
  Globe,
  Loader,
  MapPinned,
  MoonStar,
  ParkingSquare,
  School,
  Shield,
  Shirt,
  Star,
  Utensils,
  WavesLadder,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { JSX, useEffect, useState } from "react";
import { DateRangePicker, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css
import BookModule from "./BookModule";
import Review from "./Review";

interface Hotel {
  id: number;
  imageURL: string;
  imageURL1: string;
  imageURL2: string;
  city: string;
  description: string;
  price: string;
  location: string;
  noOfBed: string;
  wifi: string;
  facilities: {
    roomService: boolean;
    Restaurant: boolean;
    Pool: boolean;
    Gym: boolean;
    Spa: boolean;
    FreeParking: boolean;
    Laundry: boolean;
    InternetAccess: boolean;
    Minibar: boolean;
    SafeBox: boolean;
  };
  review: {
    userImg: string;
    name: string;
    time: string;
    comment: string;
    starRate: string;
  }[];
}

type FacilityKeys =
  | "roomService"
  | "Restaurant"
  | "Pool"
  | "Gym"
  | "Spa"
  | "FreeParking"
  | "Laundry"
  | "InternetAccess"
  | "Minibar"
  | "SafeBox";
const hotelServices: { title: FacilityKeys; icon: JSX.Element }[] = [
  { title: "roomService", icon: <School /> },
  { title: "Restaurant", icon: <Utensils /> },
  { title: "Pool", icon: <WavesLadder /> },
  { title: "Gym", icon: <Dumbbell /> },
  { title: "Spa", icon: <Fish /> },
  { title: "FreeParking", icon: <ParkingSquare /> },
  { title: "Laundry", icon: <Shirt /> },
  { title: "InternetAccess", icon: <Globe /> },
  { title: "Minibar", icon: <Utensils /> },
  { title: "SafeBox", icon: <Shield /> },
];

const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [selectedStar, setSelectedStar] = useState(3);
  const [showModule, setShowModule] = useState(false);

  const handleShowModule = () => setShowModule((prev) => !prev);
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const fetchHotel = async () => {
      const res = await fetch("/data.json");
      const jsonData = await res.json();
      const hotelId = Number(id);
      const selectedHotel = jsonData.hotels.find(
        (hotel: Hotel) => hotel.id === hotelId
      );
      setHotel(selectedHotel || null);
    };
    fetchHotel();
  }, [id]);

  if (!hotel) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="w-12 h-12 text-blue-500 animate-spin" />
      </div>
    );
  }
  return (
    <div className="h-full w-3/4 mx-auto select-none w-min-[300px]">
      {showModule && <BookModule handleShowModule={handleShowModule} />}
      <h2 className="font-bold text-4xl">{hotel.city}</h2>
      <div className="grid lg:grid-cols-3 gap-4 mt-5 group">
        <div className="lg:col-span-2">
          <Image
            src={hotel.imageURL}
            alt="image"
            width={800}
            height={400}
            className="w-full h-[190px] lg:h-[400px] rounded-lg shadow-lg object-cover group-hover:grayscale hover:grayscale-0"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <Image
              src={hotel.imageURL1}
              alt="image"
              width={800}
              height={400}
              className="w-full h-[190px] rounded-lg shadow-lg  object-cover group-hover:grayscale hover:grayscale-0"
            />
          </div>
          <div>
            <Image
              src={hotel.imageURL2}
              alt="image"
              width={800}
              height={400}
              className="w-full h-[190px] rounded-lg shadow-lg object-cover group-hover:grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100 p-6 rounded-lg shadow-md mt-5">
        <div className="flex flex-col items-center gap-2 font-semibold">
          <div>
            <MapPinned className="text-blue-500" />
          </div>
          <div>{hotel.location}</div>
        </div>
        <div className="flex flex-col items-center gap-2 font-semibold">
          <div>
            <MoonStar className="text-blue-500" />
          </div>
          <div>{hotel.price}/night</div>
        </div>
        <div className="flex flex-col items-center gap-2 font-semibold">
          <div>
            <BedDouble className="text-blue-500" />
          </div>
          <div>{hotel.noOfBed} Beds</div>
        </div>
        <div className="flex flex-col items-center gap-2 font-semibold">
          <div>
            <Wifi className="text-blue-500" />
          </div>
          <div>{hotel.wifi ? "Free" : "Charged"}</div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-5">
        <h2 className="font-bold text-4xl">About the resort </h2>
        <p className="text-lg text-gray-700 mt-6 ">
          {hotel.description}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum omnis
          officia quos a, dolores animi non eos dolor vitae tempora quisquam
          odit totam pariatur soluta, ratione minus adipisci aut ut perferendis.
          Ea minus quo sapiente distinctio nobis cumque magnam laudantium sit
          eum. Dolorum illo porro aspernatur accusantium nobis numquam optio.
        </p>
      </div>
      <hr className="text-gray-200 mt-5" />
      {/* Accommodation facilities */}
      <div className="mt-5">
        <h2 className="font-bold text-4xl">Accommodation Facilities </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100 p-6 rounded-2xl shadow-md  text-lg text-gray-700 mt-6 ">
          {hotelServices.map((service, index) => {
            const isAvailable = hotel.facilities?.[service.title] ?? false;
            return (
              <div
                key={index}
                className={`flex gap-5 items-center ${
                  !isAvailable ? "line-through text-gray-400" : ""
                }`}
              >
                <div>{service.icon}</div>
                <div>{service.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="text-gray-200 mt-5" />
      {/* import { DateRangePicker } from "react-date-range"; */}

      {/* Date range picker */}
      <div className="mt-5">
        <h2 className="font-bold text-4xl">Choose Date </h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="p-6 text-lg text-gray-700 mt-6">
            <DateRangePicker
              className="flex flex-col md:flex-row"
              ranges={dateRange}
              minDate={new Date()}
              onChange={(ranges: RangeKeyDict) =>
                setDateRange([ranges.selection])
              }
            />
          </div>
          <div className="self-end">
            <button
              onClick={handleShowModule}
              className="cursor-pointer bg-blue-500 py-2 px-6 rounded-lg text-white hover:bg-blue-400 transition-all"
            >
              Book
            </button>
          </div>
        </div>
      </div>

      <hr className="text-gray-200 mt-5" />
      {/* star */}
      <div className="mt-5">
        <h2 className="font-bold text-4xl">Reviews </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          blanditiis optio reprehenderit ullam et. Ratione aut numquam doloribus
          natus consectetur!
        </p>
        <div className="flex items-center gap-6 mt-8 ">
          {Array.from(Array(5).keys()).map((num) => (
            <span
              key={num}
              onClick={() => setSelectedStar(num + 1)}
              className={`${
                selectedStar === num + 1 ? "scale-125" : ""
              } cursor-pointer items-center flex gap-2 transition-all`}
            >
              {num + 1}
              <Star
                size={25}
                color={`${
                  selectedStar === num + 1 ? "rgb(59,130,246)" : "darkgray"
                }  `}
                fill={`${
                  selectedStar === num + 1 ? "rgb(59,130,246)" : "darkgray"
                }  `}
              />
            </span>
          ))}
        </div>
        <hr className="text-gray-200 mt-5" />
        <div className="flex items-center mt-5 py-4 px-6 border rounded-lg  w-max gap-28">
          <input
            type="text"
            placeholder="Leave your opinion..."
            className="outline-none"
          />
          <button className="cursor-pointer bg-blue-500 py-2 px-6 rounded-lg text-white hover:bg-blue-400 transition-all">
            Post
          </button>
        </div>
      </div>

      {hotel.review.map((rev, index) => (
        <Review key={index} review={rev} />
      ))}
    </div>
  );
};

export default HotelDetail;
