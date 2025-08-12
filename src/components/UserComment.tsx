import { FaQuoteLeft } from "react-icons/fa";
type UserCommentProps = {
  iconImg?: React.ReactNode;
  name?: string;
  title?: string;
  desc?: string;
};
export default function UserComment({
  iconImg,
  name,
  title,
  desc,
}: UserCommentProps) {
  return (
    <div className="relative flex flex-col text-center w-96 border rounded-2xl p-4 shadow-lg border-gray-100 border-t-4 border-t-indigo-400">
      <div className="h-10"></div>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 ">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-400 shadow-md">
          {iconImg}
        </div>
      </div>
      <div>
        <h2 className="font-semibold">{name}</h2>
      </div>
      <div className="flex items-center justify-center gap-2">
        <FaQuoteLeft className="text-indigo-400 " />
        <h3 className="text-gray-500">{title} </h3>
        <FaQuoteLeft className="text-indigo-400 " />
      </div>
      <div className="mt-5">{desc}</div>
    </div>
  );
}
