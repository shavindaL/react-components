import { useEffect, useState } from "react";
import SearchBar from "./searchBar";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);

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
      {/* 
        * Conditional Rendering 
      */}

      {!sideBar ? (
        /*
         * NavBar
         */
        <div className="bg-green-10 flex h-20 items-center">
          <h1 className="text-white text-4xl font-700 mx-9">Logo</h1>

          <a href="\" className="text-white mx-9">
            Home
          </a>
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
            <button
              className="ml-auto pr-10"
              onClick={() => {
                setSideBar(true);
              }}
            >
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
        </div>

        /*
         * End of NavBar
         */

      ) : (

        /*
         * SideBar
         */

        <>
          <div className="bg-green-9 w-screen h-screen transition-all inset-0 duration-500 ease-linear overscroll-none">
            <table className="w-11/12 mx-auto">
              <tbody>
                <tr>
                  <td className="py-5">
                    <button onClick={() => setSideBar(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        fill="#FFF"
                        width={20}
                      >
                        {/*Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                      </svg>
                    </button>
                  </td>

                </tr>
                <tr>
                  <td className="py-5">
                    <a href="\" className="text-white text-4xl">
                      Home
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-5">
                    <a
                      href="\"
                      className="text-4xl text-white"
                    >
                      LogIn
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-5">
                    <a
                      href="\"
                      className="text-4xl text-white"
                    >
                      SignUp
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-5">
                    <SearchBar />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
        /*
         * End of SideBar
         */
      )}
    </>
  );
}
