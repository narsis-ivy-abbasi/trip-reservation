import { CheckCheck } from "lucide-react";

export default function About() {
  return (
    <div className="h-full w-3/4 mx-auto select-none w-min-[300px]">
      <h1 className="text-3xl font-semibold mb-2">About Us</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-600">
          We aim to make resort booking easy, seamless, and enjoyable. Whether
          you're looking for a relaxing beach getaway or a mountain retreat, we
          connect you to the best resorts with just a few clicks.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Our Story</h2>
        <p className="text-gray-600">
          Founded in 2024, our journey began with a simple idea: to create a
          reliable, user-friendly platform for travelers to book resorts without
          hassle. We understand the importance of a perfect vacation, and our
          goal is to help you find the best accommodation effortlessly.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Why Trust Us?</h2>
        <ul className="    text-gray-600">
          <li className="flex gap-2">
            <CheckCheck /> Secure and verified resort listings
          </li>
          <li className="flex gap-2">
            <CheckCheck /> 24/7 customer support
          </li>
          <li className="flex gap-2">
            <CheckCheck /> Transparent pricing with no hidden fees
          </li>
          <li className="flex gap-2">
            <CheckCheck /> Thousands of happy travelers
          </li>
        </ul>
      </section>
    </div>
  );
}
