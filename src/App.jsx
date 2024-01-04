import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Info from "./components/Info";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import { useForm } from "./context/FormContext";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";
import TopBar from "./components/TopBar";
import BackButton from "./components/BackButton";
import NextButton from "./components/NextButton";

const App = () => {
  const { stage, finish, setFinish } = useForm();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function detectWidth() {
      setWidth(window.innerWidth);
    }

    document.addEventListener("resize", detectWidth);

    return () => {
      document.removeEventListener("resize", detectWidth);
    };
  }, []);

  return (
    <div className="w-full h-screen min-h-screen flex justify-center items-center">
      <div className="mobile:bg-white w-[95%] mobile:w-[85%] tablet:w-[75%] laptop:w-[60%] box-border p-[15px] rounded-[20px] mobile:flex mobile:flex-row mobile:items-center md:gap-[20px]">
        {width < 421 ? (
          <TopBar width={width} />
        ) : (
          <div className="w-[34%] max-w-[34%]">
            <SideBar width={width} />
          </div>
        )}
        <div className="flex justify-center items-center mobile:grow md:aspect-square p-[25px] rounded-[15px] mobile:px-[65px] bg-white mobile:bg-transparent">
          {stage === 1 && <Info width={width} />}
          {stage === 2 && <Plan width={width} />}
          {stage === 3 && <AddOns width={width} />}
          {stage === 4 ? finish ? <Thanks /> : <Summary width={width} /> : null}
        </div>
        {width < 421 && !finish && (
          <footer className="fixed bottom-0 left-0 right-0 bg-white h-[70px] flex justify-center items-center">
            <div className="flex flex-row w-full justify-between px-[20px]">
              <div>
                {(stage === 2 || stage === 3 || (stage === 4 && !finish)) && (
                  <BackButton />
                )}
              </div>
              <div>
                {(stage === 1 || stage === 2 || stage === 3) && <NextButton />}
                {stage === 4 && !finish && (
                  <button
                    className="self-end mt-auto bg-purplish-blue text-alabaster p-[10px] px-[20px] rounded-[10px] font-bold active:opacity-90"
                    onClick={() => {
                      setFinish(true);
                    }}
                  >
                    Confirm
                  </button>
                )}
              </div>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};

export default App;
