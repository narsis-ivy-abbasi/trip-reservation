import { CheckCheck } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md select-none min-w-[320px]">
      <h1 className="text-2xl font-extrabold mb-6 text-indigo-700 border-b-4 border-indigo-300 pb-2">
        About Us
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        <section className="bg-indigo-50 p-6  rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-800">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to make resort booking easy, seamless, and enjoyable. Whether
            you are looking for a relaxing beach getaway or a mountain retreat,
            we connect you to the best resorts with just a few clicks.
          </p>
        </section>
        <section className="bg-indigo-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-800">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2024, our journey began with a simple idea: to create a
            reliable, user-friendly platform for travelers to book resorts
            without hassle. We understand the importance of a perfect vacation,
            and our goal is to help you find the best accommodation
            effortlessly.
          </p>
        </section>
        <section className="bg-indigo-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">
            Why Trust Us?
          </h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-center gap-3">
              <CheckCheck className="text-indigo-500" />
              Secure and verified resort listings
            </li>
            <li className="flex items-center gap-3">
              <CheckCheck className="text-indigo-500" /> 24/7 customer support
            </li>
            <li className="flex items-center gap-3">
              <CheckCheck className="text-indigo-500" />
              Transparent pricing with no hidden fees
            </li>
            <li className="flex items-center gap-3">
              <CheckCheck className="text-indigo-500" />
              Thousands of happy travelers
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
