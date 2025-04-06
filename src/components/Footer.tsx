import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-600 p-4 text-white ">
      &copy; {new Date().getFullYear()} Trip Reservation. All Rights Reserved.
    </footer>
  );
}

export default Footer;
