import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/favicon.png";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-transparent backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 flex flex-row items-center mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img className="w-10 h-10" src={Logo}></img>
            </Link>
            <h3 className="h3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                Vivid
              </span>
            </h3>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* <li>
                <Link
                  to="/signin"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
    </li> */}
              <li>
                <button
                  onClick={goToEmail}
                  className="btn rounded-lg text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                >
                  <span>Waitlist</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const goToEmail = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export default Header;
