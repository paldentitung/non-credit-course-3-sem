import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showValidMessage, setShowValidMessage] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert("enter a valid name");
      return;
    }
    setShowValidMessage(true);
    setName("");
    setMessage("");
    setTimeout(() => {
      setShowValidMessage(false);
    }, 3000);
  };

  const products = [
    {
      id: 1,
      name: "Vextro Backpack - Black",
      description: "Stylish and durable backpack for everyday use.",
      price: "$79",
      image: "/bag-1.jpg",
    },
    {
      id: 2,
      name: "Vextro Backpack - Gray",
      description: "Perfect blend of style and comfort.",
      price: "$79",
      image: "/hero-image.jpg",
    },
    {
      id: 3,
      name: "Vextro Sling Bag",
      description: "Compact, lightweight, and versatile.",
      price: "$49",
      image: "/bag-2.jpg",
    },
  ];
  return (
    <div className="bg-white overflow-x-hidden">
      <header
        className={`p-6 fixed w-full top-0 z-50 transition-all duration-300 ${
          showHeader ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-6xl flex justify-between mx-auto">
          {/* name */}
          <h1 className="text-2xl font-bold ">Vextro</h1>
          <nav className="hidden md:block">
            <ul className="flex gap-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#product">Product</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="block md:hidden">
            <div onClick={() => setShowMenu(!showMenu)}>
              <FaBars size={25} />
            </div>
            {showMenu && (
              <div className=" absolute inset-0 bg-white  min-h-screen w-full flex justify-center items-center">
                <nav className="block md:hidden  bg-white">
                  <ul className="flex gap-5 flex-col">
                    <li onClick={() => setShowMenu(false)}>
                      <a href="#">Home</a>
                    </li>
                    <li onClick={() => setShowMenu(false)}>
                      <a href="#about">About</a>
                    </li>
                    <li onClick={() => setShowMenu(false)}>
                      <a href="#product">Product</a>
                    </li>

                    <li onClick={() => setShowMenu(false)}>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div className=" absolute top-5 right-5 bg-black text-white  p-2 rounded-md">
                  <FaTimes size={20} onClick={() => setShowMenu(!showMenu)} />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="pt-24">
        {/* hero image */}
        <section>
          <div className="w-full max-w-6xl mx-auto flex justify-between items-center  flex-col-reverse md:flex-row h-auto md:h-[60vh] p-8 md:p-5 lg:p-0  gap-4">
            {/* left */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4 text-center md:text-left overflow-x-hidden "
            >
              {/* title */}

              <h1 className="text-2xl md:text-5xl font-semibold">Vextro Bag</h1>
              <p className="text-gray-700 text-md md:text-lg">
                Sleek, modern, and packed with features to simplify your life.
              </p>
              <div className="flex gap-2 justify-center  md:justify-start">
                <button className="px-6 py-2 border transition-all duration-200 shadow-md hover:bg-black hover:text-white hover:border hover:cursor-pointer">
                  <a href="#product">Buy Now</a>
                </button>
                <button className="px-6 py-2 border transition-all duration-200 shadow-md hover:bg-black hover:text-white hover:border hover:cursor-pointer ">
                  Learn more
                </button>
              </div>
            </motion.div>
            {/* right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-64 h-64 md:w-96 md:h-96 rounded-full  overflow-hidden "
            >
              <img
                src="/hero-image.jpg"
                alt="hero-image"
                className="w-full h-full object-cover transition-all duration-200 hover:scale-105"
              />
            </motion.div>
          </div>
        </section>
        {/* about */}
        <section id="about">
          <motion.div
            className="w-full max-w-6xl mx-auto p-3 md:p-0"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className=" font-semibold text-lg uppercase">About Vextro</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Built to Carry Your Everyday
              </h3>
              <p className="text-gray-700 text-lg md:text-base">
                Vextro Backpack combines style, functionality, and durability.
                With multiple compartments, water-resistant fabric, and
                ergonomic design, it’s perfect for work, travel, or outdoor
                adventures.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition">
                <h4 className="font-semibold text-gray-900">Water Resistant</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Keep your belongings safe from rain.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition  ">
                <h4 className="font-semibold text-gray-900">
                  Multiple Compartments
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Organize your items efficiently.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition">
                <h4 className="font-semibold text-gray-900">
                  Comfortable Design
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Ergonomic straps for all-day use.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
        {/* product */}
        <section id="product">
          <div className="w-full max-w-6xl mx-auto  mt-10 flex flex-col gap-10 p-5 h-auto md:h-[80vh] pt-24">
            <div className="flex flex-col gap-2  text-center md:text-left">
              <h1 className="text-2xl font-bold">Our Products</h1>
              <span className="text-[18px] ">Choose Your Perfect Bag</span>
              <p className="text-gray-600">
                Explore our collection of stylish and durable bags for everyday
                life.
              </p>
            </div>
            {/* producrts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2  place-items-center md:place-items-start">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className=" w-[300px] h-auto md:w-[350px] md:h-[400px]  border-0 shadow-md hover:shadow-lg  group relative rounded-md overflow-auto md:overflow-hidden    "
                >
                  {/* image */}
                  <div className=" w-auto h-auto md:w-[350px] md:h-[400px] ">
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="  absolute  w-full h-full inset-0  transition-all duration-300 group-hover:flex justify-center items-center group-active:bg-black/50 group-hover:bg-black/50"></div>
                  {/* content */}
                  <div className="flex flex-col gap-1  bottom-2 left-3 text-black md:text-white transition-all duration-300  md:group-hover:absolute p-4">
                    <h1 className="text-2xl py-2 font-bold">{product.name}</h1>
                    <span className="text-[16px]">{product.description}</span>
                    <span>Price:{product.price}</span>
                    <button className="px-6 py-2 border transition-all duration-200 shadow-md hover:text-black hover:bg-white hover:border hover:cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* contact */}
        <section id="contact">
          <div className="w-full max-w-6xl mx-auto  flex flex-col md:flex-row mt-10 h-auto md:h-[50vh] p-5 pt-20 gap-6">
            {/* left section */}

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex flex-col gap-2 overflow-x-hidden"
            >
              <h1 className="text-3xl font-semibold">Get In Touch</h1>
              <p>
                {" "}
                Have questions or want to know more about our bags? Drop us a
                message!
              </p>
              <div className="flex gap-4">
                <FaFacebook size={25} />
                <FaInstagram size={25} />
                <FaTwitter size={25} />
              </div>
            </motion.div>

            {/* right section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 "
            >
              <form
                action=""
                className="flex flex-col w-full gap-6"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="name" className="text-[18px]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="ring p-4 outline-0 focus:ring focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="message">Message</label>
                  <input
                    type="text"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className="ring p-4 outline-0 focus:ring focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <button
                    type="submit"
                    className="bg-black text-white p-3 opacity-75 hover:opacity-100 active:opacity-40"
                  >
                    Send message
                  </button>
                </div>
                {showValidMessage && (
                  <div className="text-[18px] text-green-500">message sent</div>
                )}
              </form>
            </motion.div>
          </div>
        </section>
        {/* footer */}
        <footer>
          <div className="w-full max-w-6xl mx-auto mt-10 p-5 md:p-0 ">
            <div className="flex flex-col md:flex-row justify-between ">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold ">Vextro</h1>
                <p className="text-gray-400">
                  Stylish bags for everyday adventures.
                </p>
                <div className="flex gap-4">
                  <FaFacebook size={25} />
                  <FaInstagram size={25} />
                  <FaTwitter size={25} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-white">Quick Links</h4>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
                <a href="#product" className="hover:text-white transition">
                  Products
                </a>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </div>
            </div>

            <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-4">
              &copy; {new Date().getFullYear()} Vextro. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
