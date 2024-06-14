import { useState } from "react";
import Search from "./search";
import "../App.css";
// import ThemeSwicher from "./theme/ThemeSwitcher";
const Header = () => {
  const [isMenu, OpenMenu] = useState(false);
  const [isSearch, OpenSearch] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handelMenu = () => {
    if (isMenu) OpenMenu(false);
    else OpenMenu(true);
  };
  const HandelSearch = () => {
    OpenSearch(!isSearch);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  };

  return (
    <>
      <Search isOpen={isSearch} sendDataToParent={HandelSearch} />
      <div className=" px-2 w-full  h-16 flex justify-center items-center  md:px-10 bg-slate-50	">
        <div className="flex flex-row w-full ">
          <div className=" w-3/6 flex flex-row   items-center md:1/6">
            <div className="">
              <img
                src="https://th.bing.com/th?id=OIP.Vy5PUdCk1nZpeE31MCa1pwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                className="w-10"
                alt=""
              />
            </div>
            <div className="pl-3 font-bold text-lg	md:text-2xl">
              <h1>Courseee 0-1</h1>
            </div>
          </div>
          <div className="row w-3/6 flex flex-row  items-center justify-end space-x-6 font-semibold md:w-5/6">
            <div className="hidden md:block hover:text-indigo-800  hover:border-b-4 border-indigo-800">
              <h1>Home</h1>
            </div>
            <div className="hidden md:block hover:text-indigo-800  hover:border-b-4 border-indigo-800">
              <h1>Courses</h1>
            </div>
            <div className=" flex flex-row  hover:text-indigo-800">
              <div className="" onClick={HandelSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
            <div className=" flex flex-row  hover:text-indigo-800 md:hidden">
              <div className="" onClick={() => handelMenu(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenu ? (
        <div className="absolute right-0 w-1/2 flex flex-col justify-center items-center bg-gray-200 rounded-lg md:hidden">
          <div className="text-indigo-800 hover:text-white w-full  hover:bg-indigo-800 p-2 rounded-lg	">
            <h1>Home</h1>
          </div>
          <div className="text-indigo-800 hover:text-white w-full hover:bg-indigo-800  p-2 rounded-lg	">
            <h1>Courses</h1>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
