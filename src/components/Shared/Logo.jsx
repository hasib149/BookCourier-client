import React from "react";
import logo from "../../assets/images/photo-1544947950-fa07a98d237f.avif";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="" className="w-10 h-10 rounded-full object-cover" />
      <p className="text-xl font-bold text-white">BookCourier</p>
    </div>
  );
};

export default Logo;
