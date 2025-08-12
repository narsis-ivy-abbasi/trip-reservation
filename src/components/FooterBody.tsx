
function FooterBody() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
      <div>
        <h4 className="font-semibold mb-2">Company</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Support</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>Help Center</li>
          <li>Contact us</li>
          <li>Cancellation Options</li>
          <li>Help Center</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Legal</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Follow us</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterBody;
