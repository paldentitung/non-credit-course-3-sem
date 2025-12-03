import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="w-full max-w-6xl flex justify-between mx-auto">
        {/* name */}
        <h1 className="text-2xl font-bold ">Vextro</h1>
        <nav className="">
          <ul className="flex gap-5">
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
