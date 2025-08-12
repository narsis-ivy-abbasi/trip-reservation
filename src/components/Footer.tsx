import FooterBody from "./FooterBody";

function Footer() {
  return (
    // #cbcbcb
    <footer className="w-full bg-[#f1f1f1] rounded-3xl">
      <div className="p-10 mx-10">
        <FooterBody />
      </div>
      <div className="w-full p-4 text-gray-500 rounded-t-3xl text-center z-10 bg-[#cbcbcb]">
        &copy; {new Date().getFullYear()} Trip Reservation. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
