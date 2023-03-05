import { useEffect, useRef, useState } from "react";
import SearchBar from "./searchBar";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, [windowWidth]);

  console.log(windowWidth);

  return (
    <>
      <div className="bg-green-10 flex h-20 items-center">
        <h1 className="text-white text-4xl font-700 mx-9">Logo</h1>

        <a href="\" className="text-white mx-9">
          Home
        </a>
        {/* Search Bar */}
        {windowWidth > 720 ? (
          <>
            <SearchBar />
            <a
              href="\"
              className="mobile-720:ml-10 rounded-md desktop-1920:ml-20 desktop-1440:ml-25 text-green-7 border-green-7 border-solid border-2 px-5 py-2 hover:border-white hover:text-white"
            >
              LogIn
            </a>

            <a
              href="\"
              className="mobile-720:ml-12 desktop-1440:ml-8 desktop-1920:ml-8 rounded-md text-white bg-green-5 border-green-5 border-solid border-2 px-5 py-2 hover:border-white hover:text-green-5 hover:bg-white"
            >
              SignUp
            </a>
          </>
        ) : (
          <button className="ml-auto pr-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={20}
              fill="#FFF"
            >
              {/*Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>

        )}
        {/*End of Search Bar */}
      </div>
    </>
  );
}
