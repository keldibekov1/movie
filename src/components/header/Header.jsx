import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import { SlHome } from "react-icons/sl";
import { CiSearch, CiBookmark } from "react-icons/ci";
import { MdMovie } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Афиша", icon: <SlHome className="text-2xl" /> },
    { path: "/movies", label: "Сеансы", icon: <MdMovie className="text-2xl" /> },
    { path: "/saved", label: "Избранное", icon: <CiBookmark className="text-2xl" /> },
    { path: "/search", label: "Поиск", icon: <CiSearch className="text-2xl" /> },
  ];

  return (
    <header className="bg-[#121212] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <NavLink to="/">
          <img className="h-10 object-cover" src={logo} alt="logo" />
        </NavLink>

        <div className="hidden md:flex items-center gap-6 text-gray-400">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center w-[80px] ${
                  isActive ? "text-[#C61F1F]" : "text-gray-400"
                }`
              }
            >
              {item.icon}
              <p className="text-[12px] mt-1">{item.label}</p>
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block mr-6">
          <button className="w-[140px] h-[48px] bg-[#C61F1F] text-white rounded hover:bg-red-700 transition">
            Login
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoClose className="text-3xl text-[#C61F1F]" />
            ) : (
              <GiHamburgerMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1D1D1D] text-white px-4 pb-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 px-3 rounded ${
                    isActive ? "text-[#C61F1F]" : "text-gray-300"
                  } hover:bg-[#2c2c2c] transition`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}

            <button className="mt-2 w-full bg-[#C61F1F] h-[44px] rounded hover:bg-red-700 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
