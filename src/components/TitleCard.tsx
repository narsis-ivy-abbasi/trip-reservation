import React from "react";

interface TitleCardProps {
  iconImg?: React.ReactNode;
  title: string;
  des: string;
}

export default function TitleCard({ iconImg, title, des }: TitleCardProps) {
  return (
    <div className="flex border border-gray-200 gap-5 p-5 rounded-2xl items-center shadow-sm w-80 md:w-110 h-25 md:h-30">
      <div>{iconImg}</div>
      <div>
        <h1 className="font-bold">{title}</h1>
        <h2 className="text-gray-400">{des}</h2>
      </div>
    </div>
  );
}
