import { useState } from "react";
import "../App.css";
const StepBar = ({ state, steps, labels }) => {
  console.log(state, steps, labels);
  const [isActive, setActive] = useState("");
  const handeSwitch = (i) => {
    setActive(i);
  };

  return (
    <>
      <div className="fixed inset-x-0  hidden md:block h-12 bg-white-100  rounded-full flex justify-center  mx-auto z-10">
        <div className="flex flex-row h-full py-1 justify-center">
          {labels?.map((val) => {
            return (
              <div
                key={val}
                className={`w-auto p-2 h-full  rounded-full flex justify-center items-center  font-semibold ${
                  state === val
                    ? "text-white bg-indigo-800"
                    : "bg-white-100 text-gray-400"
                }`}
              >
                <p> {val}</p>
              </div>
            );
          })}

          {/* <div
            className="w-28 h-full  rounded-full flex justify-center items-center  font-semibold"
            onClick={() => handeSwitch()}
          >
            <p>Test One</p>
          </div> */}
        </div>
      </div>
      <div className="fixed flex font-semibold flex-row  items-center space-x-2 md:hidden">
        <div className="p-2 h-10 bg-indigo-800 flex justify-center items-center rounded-full text-white">
          {state}
        </div>
        <div className=" text-indigo-800">
          <p>of {steps}</p>
        </div>
      </div>
    </>
  );
};

export default StepBar;
