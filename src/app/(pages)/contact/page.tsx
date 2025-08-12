import { Mail, MapPinHouse, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md select-none min-w-[320px]">
      <h1 className="text-2xl font-extrabold mb-6 text-indigo-700 border-b-4 border-indigo-300 pb-2">
        Contact Us
      </h1>
      <p className="text-gray-600 mb-8">
        We’re here to help! Whether you have a question, feedback, or just want
        to say hello, you can reach us through the details below.
      </p>
      <form className="bg-white shadow-md rounded-lg p-6 space-y-4 border border-gray-200">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md border border-gray-200"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md border border-gray-200"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded-md border border-gray-200"
        ></textarea>
        <button className="w-full cursor-pointer bg-blue-500 py-2 px-6 rounded-lg text-white hover:bg-blue-400 transition-all">
          Send Message
        </button>
      </form>

      <div className="flex flex-col mt-8 space-y-2">
        <div className="flex gap-4">
          <div>
            <PhoneCall className="text-gray-500" />
          </div>
          <div>
            <b>Phone:</b> 001-123-4567
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <Mail className="text-gray-500" />
          </div>
          <div>
            <b>Email:</b> info@travel.com
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <MapPinHouse className="text-gray-500" />
          </div>
          <div>
            <b>Address:</b> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fugit, quaerat.
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p>
          Our team is available Monday–Friday from 9 AM to 6 PM. We’ll do our
          best to respond within 24 hours.
        </p>
      </div>
    </div>
  );
}
