import React from "react";
import { useForm } from "../context/FormContext";

const BackButton = () => {
  const {setStage} = useForm();

  function backHandler() {
    setStage(prevStage => prevStage - 1);
  }

  return (
    <button className={`self-start mt-auto bg-transparent text-cool-gray active:text-marine-blue p-[10px] px-[20px] rounded-[10px] font-bold active:opacity-90`} onClick={backHandler}>
      Go Back
    </button>
  );
};

export default BackButton;
