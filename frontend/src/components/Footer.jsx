import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-4 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        
        <div>
          <h2 className="text-white text-lg mb-4 font-semibold">SparkZkart</h2>
          <p>Your one-stop shop for all things trendy and essential.</p>
        </div>

        <div>
          <h3 className="text-white mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-3 font-semibold">Customer Service</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-white">FAQ</Link></li>
            <li><Link to="#" className="hover:text-white">Returns</Link></li>
            <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-3 font-semibold">Contact Us</h3>
          <div className="flex gap-4">
            <p>support@sparkzkart.com</p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SparkZkart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
