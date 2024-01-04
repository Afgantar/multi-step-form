import React from "react";
import { useForm } from "../context/FormContext";

const NextButton = () => {
  const { stage, setStage, personalInfo, setPersonalInfo, orderData } = useForm();

  function nextHandler() {
    if (stage === 1) {
      if (!personalInfo.name || !personalInfo.email || !personalInfo.phone) {
        setPersonalInfo({
          ...personalInfo,
          showErrMessage: true,
        });
        return;
      }

      if (!personalInfo.validEmail) {
        setPersonalInfo({
          ...personalInfo,
          showErrMessage: true,
        });
        return;
      }

      setPersonalInfo({
        ...personalInfo,
        showErrMessage: false,
      });
    }

    if (stage === 2) {
      if (!orderData.planName) {
        setPersonalInfo({
          ...personalInfo,
          planErrMessage: true,
        });
        return ;
      }

      setPersonalInfo({
        ...personalInfo,
        planErrMessage: false,
      });
    }

    setStage((prevStage) => prevStage + 1);
  }

  return (
    <button
      className="self-end mt-auto bg-marine-blue text-alabaster p-[10px] px-[20px] rounded-[10px] font-bold active:opacity-90"
      onClick={nextHandler}
    >
      Next Step
    </button>
  );
};

export default NextButton;
