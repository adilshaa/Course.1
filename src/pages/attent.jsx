import { useEffect, useState } from "react";
import StepBar from "../components/stepBar";
import ColorizedText from "../components/ColorizedText";
import data from "../data.json";
const Test = () => {
  const [viewData, setData] = useState({
    number: 1,
    label: data?.firstStep?.name,
    data: data.firstStep,
  });
  const [isStrict, setStrickMode] = useState(false);
  const [isHeart, setHeartMode] = useState(false);
  const [time, setTime] = useState(10); // 300 seconds = 5 minutes

  const handelSetData = () => {
    let chachData;
    switch (viewData.label) {
      case "Fundamentals":
        chachData = data.secondStep;
        break;
      case "Tricky exercises":
        chachData = data.secondStep;
    }
    if (viewData.number <= Object.keys(data).length - 1) {
      setData({
        number: viewData.number + 1,
        label: allNames[viewData.number],
        data: chachData,
      });
    }
  };

  const handelStricktMode = () => {
    setStrickMode(!isStrict);
  };
  const handelHeartMode = () => {
    setHeartMode(!isHeart);
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
  useEffect(() => {
    if (time > 0) {
      console.log(time);
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

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
            className="relative w-full p-3 h-auto bg-gray-100 rounded-md mt-1 md:w-4/5"
            style={{ display: "inline-block" }}
          >
            <a href="https://www.programiz.com/javascript/online-compiler/">
              <div className="absolute right-1 top-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-indigo-300 hover:text-indigo-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>
            </a>

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

      <div className="w-full flex flex-col md:flex-row pt-10">
        <div className="w-5/6 pb-32">
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
      <div className="fixed inset-x-0 bottom-2 flex flex-col justify-start px-10 ">
        <div className="flex  w-2/3 flex-row px-2 space-x-1">
          {viewData.data.tasks.map((task, i) => (
            <div
              className={`w-1/2 p-1 ${
                task.complexity === "hard"
                  ? "bg-red-300"
                  : task.complexity === "medium"
                  ? "bg-blue-300"
                  : task.complexity === "easy"
                  ? "bg-green-300"
                  : "bg-gray-300"
              } rounded-md`}
              key={i + 1}
            ></div>
          ))}
        </div>
        <div className="px-auto w-2/3 bg-gray-200 h-16 flex items-center  rounded-full mt-2">
          {/* Content */}
          <div className="flex flex-row w-1/2  px-2 items-center space-x-2">
            <div
              onClick={handelStricktMode}
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
              <div className="w-12 h-10 flex items-center justify-center  rounded-full text-indigo-800 ">
                {formatTime(time)}
              </div>
            ) : (
              <></>
            )}
            <div
              onClick={handelHeartMode}
              className={` w-14 h-14 flex items-center justify-center rounded-full   ${
                isHeart
                  ? "bg-red-700 hover:bg-red-700 text-white"
                  : " text-red-800 bg-red-200 "
              }`}
            >
              {isStrict ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              )}
            </div>
          </div>

          <div className="flex flex-row w-1/2  px-2 justify-end  ">
            {console.log(time == 0 && isStrict, time, isStrict)}
            {time == 0 || !isStrict ? (
              <div className=" w-28 h-14 flex items-center justify-center bg-indigo-700 rounded-full text-white hover:bg-indigo-800">
                <button onClick={() => handelSetData()}>Next</button>
              </div>
            ) : (
              <div className=" w-28 h-14 flex items-center justify-center bg-indigo-700 rounded-full text-white hover:bg-indigo-800">
                <button>Next</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
