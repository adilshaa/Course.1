import { useState } from "react";
import "../App.css";
import Loader from "./Loading/gptLoader";

const Search = ({ isOpen, sendDataToParent }) => {
  console.log(isOpen);
  const [isLoader, setLoader] = useState(false);

  const handleClick = () => {
    sendDataToParent(false);
  };
  const handleChildClick = (e) => {
    e.stopPropagation(); // Prevents the click event from bubbling up to the parent
    console.log("Child clicked");
  };
  const handelSearch = () => {
    setLoader(true);
  };
  return (
    <>
      {isOpen ? (
        <div
          className=" fixed inset-0 flex px-4 justify-center z-10 bg-black bg-opacity-50 backdrop-blur-sm "
          onClick={handleClick}
        >
          <div
            className="relative w-full mt-20  h-16 bg-hard-light flex  items-center rounded-2xl slide-enter md:w-1/3"
            onClick={handleChildClick}
          >
            <div className="flex flex-row w-full  items-center mx-10">
              <div className="w-5/6">
                <input
                  type="text"
                  className="bg-hard-light w-full  h-10 focus:outline-none"
                  placeholder="Search..."
                />
              </div>
              {isLoader ? (
                <div className="ml-14 flex justify-end ">
                  <Loader></Loader>
                </div>
              ) : (
                <div
                  className="w-1/6 flex justify-end hover:text-indigo-800"
                  onClick={() => handelSearch()}
                >
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
              )}
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}

      <div className=""></div>
    </>
  );
};

export default Search;
