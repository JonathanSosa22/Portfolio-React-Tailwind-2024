/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#" className="font-bold">
                  Sosa <span className="text-red-600">Jonathan</span>
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 items-center space-x-4 font-bold">
                <a href="#" className="hover:text-yellow-400">
                  Home
                </a>
                <a href="#" className="hover:text-yellow-400">
                  About
                </a>
                <a href="#" className="hover:text-yellow-400">
                  Portfolio
                </a>
                <a href="#" className="hover:text-yellow-400">
                  Contact
                </a>
                <button onClick={toggleTheme}>
                  {theme === "light" ? (
                    <i className="fa-solid fa-moon"></i>
                  ) : (
                    <i className="fa-solid fa-sun text-yellow-200"></i>
                  )}
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button className="mr-4" onClick={toggleTheme}>
                {theme === "light" ? (
                  <i className="fa-solid fa-moon"></i>
                ) : (
                  <i className="fa-solid fa-sun text-yellow-200"></i>
                )}
              </button>
              <button onClick={toggleNavBar}>
                {isOpen ? (
                  <i className="fa-solid fa-xmark"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden text-center font-bold">
            <a href="#" className="pb-5 block hover:text-yellow-400">
              Home
            </a>
            <a href="#" className="pb-5 block hover:text-yellow-400">
              About
            </a>
            <a href="#" className="pb-5 block hover:text-yellow-400">
              Portfolio
            </a>
            <a href="#" className="pb-5 block hover:text-yellow-400">
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
