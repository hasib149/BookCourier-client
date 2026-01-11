import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-8 px-6 py-12">
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="all-books" className="hover:underline">
                  All Books
                </a>
              </li>
              <li>
                <a href="profile" className="hover:underline">
                  Profile
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
            <p>Office: Dhaka Metro D</p>
            <p>Office Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col gap-3 text-lg">
              <a
                href="#"
                className="hover:text-gray-300 flex gap-2 items-center"
              >
                <FaFacebookF /> Facebook
              </a>
              <a
                href="#"
                className="hover:text-gray-300 flex gap-2 items-center"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="#"
                className="hover:text-gray-300 flex gap-2 items-center"
              >
                <FaLinkedinIn /> Linkedin
              </a>
              <a
                href="#"
                className="hover:text-gray-300 flex gap-2 items-center"
              >
                <FaXTwitter /> Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-xs sm:text-sm text-gray-200">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
