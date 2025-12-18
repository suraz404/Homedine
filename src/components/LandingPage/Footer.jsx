import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#113905] px-6 py-12 text-white">
      {/* Brand */}
      <div className="text-center">
        <h2 className="text-[30px] font-normal text-yellow-400 mx-2.5">
          Home<span className="italic text-white">dine</span>
        </h2>
        <p className="mt-1 text-sm text-white">
          Designed for everyday kitchens
        </p>
      </div>

      <div className="my-8 h-px w-full bg-gray-200" />

      {/* Links */}
      <div className="space-y-8 text-sm">
        <div>
          <h3 className="mb-4 font-medium uppercase tracking-wide text-white">
            Explore
          </h3>
          <div className="space-y-3">
            <a className="flex items-center gap-3 text-white" href="#aboutus">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
              About Us
            </a>
            <a
              className="flex items-center gap-3 text-white hover:text-gray-900"
              href="#"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
              Products
            </a>
            <a
              className="flex items-center gap-3 text-white hover:text-gray-900"
              href="#"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
              Reviews
            </a>
            <a
              className="flex items-center gap-3 text-white hover:text-gray-900"
              href="#"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
              Contact
            </a>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-4 font-medium uppercase tracking-wide text-white">
            Support
          </h3>
          <div className="space-y-3">
            <a
              className="flex items-center gap-3 text-white hover:text-gray-900"
              href="#"
            >
              <HiOutlineMail className="text-lg" />
              Help Center
            </a>
            <a
              className="flex items-center gap-3 text-white hover:text-gray-900"
              href="#"
            >
              <HiOutlineLocationMarker className="text-lg" />
              Shipping & Returns
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-6">
        <a
          className="rounded-full bg-[rgb(233,237,214)] p-3 shadow-sm hover:shadow-md transition text-amber-900"
          href="#"
        >
          <FiInstagram />
        </a>
        <a
          className="rounded-full bg-[rgb(233,237,214)] p-3 shadow-sm hover:shadow-md transition text-amber-900"
          href="#"
        >
          <FiFacebook />
        </a>
        <a
          className="rounded-full bg-[rgb(233,237,214)] p-3 shadow-sm hover:shadow-md transition text-amber-900"
          href="#"
        >
          <FiTwitter />
        </a>
      </div>

      <p className="mt-10 text-center text-xs text-white">
        © 2025 Homedine. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
