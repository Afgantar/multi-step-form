import React from "react";
import { useForm } from "../context/FormContext";

const SideIndicator = ({ number, text, width }) => {
  const {stage} = useForm();

  return (
    <div className="flex flex-row gap-[15px] items-center">
      <div className={`w-[30px] sm:w-[40px] sm:text-[12px] text-[10px] flex justify-center items-center aspect-square rounded-full border-[1px] border-light-gray font-bold ${stage === parseInt(number) ? "bg-light-blue text-marine-blue" : "bg-transparent text-white"}`}>
        {number}
      </div>
      {width >= 640 && (<div className="flex flex-col">
        <p className="text-cool-gray sm:text-[12px] text-[10px]">STEP {number}</p>
        <p className="text-white font-medium sm:text-[12px] text-[10px]">{text}</p>
      </div>)}
    </div>
  );
};

export default SideIndicator;
