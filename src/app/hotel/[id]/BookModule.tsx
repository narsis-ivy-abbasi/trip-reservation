import { X } from "lucide-react";

interface BookModuleProps {
  handleShowModule: () => void;
}

function BookModule({ handleShowModule }: BookModuleProps) {
  return (
    <div className="fixed z-30 top-0 left-0 backdrop-blur min-h-full w-full ">
      <div className="bg-white min-w-80 w-1/3 top-1/3 left-1/3 rounded-lg absolute pb-4 shadow-2xl border-1 border-slate-100">
        <div className="absolute -top-6 -right-5 p-2 bg-white rounded-full border-slate-100  border">
          <X size={20} className="cursor-pointer" onClick={handleShowModule} />
        </div>
        <div className="px-8 py-8 flex flex-col justify-between ">
          <h2 className="font-semibold">Login/Register</h2>
          <div className="py-2">
            To login or sign up, enter your mobile number
          </div>
          <input
            type="text"
            className="bg-white  mb-5 border border-gray-200 px-4 py-2 rounded-2xl"
            placeholder="Mobile number"
          />
          <div className="w-full flex items-center justify-center">
            <button className="cursor-pointer bg-blue-500 py-2 px-6 rounded-lg text-white hover:bg-blue-400 transition-all w-1/2">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookModule;
