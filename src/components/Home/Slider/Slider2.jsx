import React from "react";
import { Link } from "react-router";

const Slider2 = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1591771208048-5ec9d0cb2b47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">To Kill a Mockingbird</h1>
            <p className="mb-5">
              A powerful story about racial injustice and moral growth in the
              American South.
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

export default Slider2;
