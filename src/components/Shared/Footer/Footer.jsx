import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-12">
      <Container>
        {" "}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Main Street, Dhaka, Bangladesh</p>
            <p>Phone: +880 1996380447</p>
            <p>Email: hasibahmedshrabon@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div className="ml-30">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col gap-4 text-xl">
              <a
                href="#"
                className="hover:text-gray-300 flex gap-1 items-center"
              >
                <FaFacebookF /> Facebook
              </a>
              <a
                href="#"
                className="hover:text-gray-300 flex gap-1 items-center"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="#"
                className="hover:text-gray-300 flex gap-1 items-center"
              >
                <FaLinkedinIn /> Linkedin
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </Container>{" "}
    </footer>
  );
};

export default Footer;
