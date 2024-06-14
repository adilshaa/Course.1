import { useState } from "react";
import StepBar from "../components/stepBar";
import ColorizedText from "../components/ColorizedText";
import data from "../data.json";
const Test = () => {
  const [viewData, setData] = useState({
    number: 1,
    label: data?.firstStep?.name,
  });
  const [isStrict, setStrickMode] = useState(false);

  const handelSetData = () => {
    if (viewData.number <= Object.keys(data).length - 1) {
      setData({
        number: viewData.number + 1,
        label: allNames[viewData.number],
      });
    }
  };
  
  const handelStricktMode = () => {
    setStrickMode(!isStrict);
  };
  function extractNames(obj) {
    let names = [];

    function recurse(currentObj) {
      // Check if the current object has a 'name' property
      if (currentObj.hasOwnProperty("name")) {
        names.push(currentObj.name);
      }

      // Iterate over the keys of the current object
      for (let key in currentObj) {
        if (typeof currentObj[key] === "object" && currentObj[key] !== null) {
          recurse(currentObj[key]);
        }
      }
    }

    recurse(obj);
    return names;
  }

  const allNames = extractNames(data);

  const DetailedBox = ({ header, warner, boxcon }) => {
    return (
      <div className="mt-5 ">
        <div className="font-lighter">
          <p>{header}</p>
        </div>
        <div className="pl-3">
          <p className=" text-gray-500">{warner}</p>
          <div
            className="w-full p-3 h-auto bg-gray-100 rounded-md mt-1 md:w-4/5"
            style={{ display: "inline-block" }}
          >
            <ColorizedText text={boxcon}></ColorizedText>
          </div>
        </div>
      </div>
    );
  };

  const FirstStep = ({ data }) => {
    return (
      <>
        {data.tasks.map((task, i) => {
          return (
            <div className="mt-2" key={i + 1}>
              <div className="font-semibold text-xl">
                <p>{task.header}</p>
              </div>
              <div className="font-lighter text-sm">
                <p>{task.question}</p>
              </div>
              <DetailedBox
                header={task.hintTitle}
                boxcon={task.showBoxCnt}
                warner={task.hints}
              ></DetailedBox>
            </div>
          );
        })}
      </>
    );
  };

  const SecondStep = ({ data }) => {
    return (
      <>
        {data.tasks.map((task, i) => {
          return (
            <div className="mt-2" key={i + 1}>
              <div className="font-semibold text-xl">
                <p>{task.header}</p>
              </div>
              <div className="font-lighter text-sm">
                <p>{task.question}</p>
              </div>
              <DetailedBox
                header={task.hintTitle}
                boxcon={task.showBoxCnt}
                warner={task.hints}
              ></DetailedBox>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <StepBar
        state={viewData.label}
        steps={Object.keys(data).length}
        labels={allNames}
      />

      <div className="w-full flex flex-col md:flex-row ">
        <div className="w-5/6 ">
          {viewData.label === data?.firstStep.name ? (
            <>
              <FirstStep data={data.firstStep}></FirstStep>
            </>
          ) : (
            <></>
          )}
          {viewData.label === data?.secondStep.name ? (
            <>
              <SecondStep data={data.secondStep}></SecondStep>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="w-1/6">
          <p>{viewData?.number}</p>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-2 flex justify-start px-10 ">
        <div className="px-auto w-2/3 bg-gray-200 h-16 flex items-center  rounded-full">
          {/* Content */}
          <div
            className="flex flex-row w-1/2  px-2 items-center space-x-2"
            onClick={handelStricktMode}
          >
            <div
              className={` w-14 h-14 flex items-center justify-center rounded-full   ${
                isStrict
                  ? "bg-indigo-700 hover:bg-indigo-800 text-white"
                  : " text-indigo-800"
              }`}
            >
              {isStrict ? (
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
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              ) : (
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
                    d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              )}
            </div>
            {isStrict ? (
              <div className="w-20 h-14 flex items-center justify-center  rounded-full text-indigo-800 ">
                10:59
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-row w-1/2  px-2 justify-end  ">
            <div className=" w-28 h-14 flex items-center justify-center bg-indigo-700 rounded-full text-white hover:bg-indigo-800">
              <button onClick={() => handelSetData()}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
