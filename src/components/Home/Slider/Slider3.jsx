import React from "react";
import { Link } from "react-router";

const Slider3 = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1696456959130-083552f0bb07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tzJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">A dystopian novel</h1>
            <p className="mb-5">
              A dystopian novel depicting a totalitarian society under constant
              surveillance and control.
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

export default Slider3;
