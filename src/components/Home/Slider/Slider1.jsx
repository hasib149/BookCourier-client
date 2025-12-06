import React from "react";
import { Link } from "react-router";

const Slider1 = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">The Great Gatsby</h1>
            <p className="mb-5">
              A classic novel of the Jazz Age, exploring themes of wealth, love,
              and the American Dream
            </p>
            <Link to="/all-books" className="btn btn-primary">
              All Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
