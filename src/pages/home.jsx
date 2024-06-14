import React from "react";
import Search from "../components/search";

const Home = () => {
  const array = [1, 2, 3, 4];
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {array.map((items) => {
          return (
            <div
              className="text-white-900 h-auto h-20 rounded-xl bg-slate-50 hover:bg-hard-light"
              //   style={{ background: "#f4f4f4" }}
            >
              <div className="h-20 flex flex-row items-center p-2">
                <div className="img w-16 h-16 flex items-center justify-center rounded-full	bg-hard-light">
                  <img
                    className="img w-10 h-10 rounded-full	"
                    src="https://th.bing.com/th/id/OIP.JR7a_vTXgFbfPfvbuYFdCQHaGl?w=229&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt=""
                  />
                </div>
                <div className="font-semibold text-xl  pl-4 ">Javascript</div>
              </div>
              <div className="font-sm p-2">
                <p>
                  To conditionally show or hide an element based on the screen
                  size using Tailwind CSS, you can use responsive utility
                  classes. For your use case, you can use hidden to hide the
                  element on small devices and md:block to show it on medium and
                  larger devices
                </p>
              </div>
              <div className="flex flex-row items-end justify-end  mt-2">
                <div className="w-1/4 flex justify-end p-2">
                  <button className="w-24 h-10 rounded-3xl font-semibold text-white bg-indigo-800">
                    {" "}
                    Start
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
