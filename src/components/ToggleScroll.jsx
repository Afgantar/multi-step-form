import React from "react";
import { useForm } from "../context/FormContext";

const ToggleScroll = () => {
  const {useMonth, setUseMonth}= useForm();

  function monthToggleHandler() {
    setUseMonth(prevUseMonth => !prevUseMonth);
  }

  return (
    <div className="relative w-[30px] h-[16px] rounded-full bg-marine-blue cursor-pointer" onClick={monthToggleHandler}>
      <div className={`absolute w-[12px] h-[12px] rounded-full bg-white top-[2px] left-[2px] transition-all ease-in-out duration-300 ${useMonth ? null : "translate-x-[14px]"}`}></div>
    </div>
  );
};

export default ToggleScroll;
