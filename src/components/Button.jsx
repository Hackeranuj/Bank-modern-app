import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none  ${styles}`}>
    {/* Get Started */}
    <div className="border-b-1 border-transparent hover:border-b hover:border-green-700" >Get Started</div>
  </button>
);

export default Button;