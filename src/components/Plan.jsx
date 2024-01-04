import React from "react";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import PlanCard from "./PlanCard";
import ArcadeLogo from "../assets/images/icon-arcade.svg";
import AdvancedLogo from "../assets/images/icon-advanced.svg";
import ProLogo from "../assets/images/icon-pro.svg";
import ToggleScroll from "./ToggleScroll";
import { useForm } from "../context/FormContext";

const Plan = ({ width }) => {
  const { personalInfo } = useForm();

  const planData = [
    {
      pict: ArcadeLogo,
      name: "Arcade",
      price: "9",
    },
    {
      pict: AdvancedLogo,
      name: "Advanced",
      price: "12",
    },
    {
      pict: ProLogo,
      name: "Pro",
      price: "15",
    },
  ];

  return (
    <div className="flex flex-col h-full w-full animate-slideFromRight">
      <div className="flex flex-col gap-[30px] grow">
        <div>
          <h1 className="text-[30px] text-marine-blue font-bold">
            Select your plan
          </h1>
          <p className="text-cool-gray">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-row gap-[15px]">
            {planData.map((plan) => (
              <PlanCard
                key={plan.name}
                picture={plan.pict}
                text={plan.name}
                price={plan.price}
              />
            ))}
          </div>
          <div className="w-full bg-magnolia p-[10px] rounded-[6px] flex justify-center items-center">
            <div className="font-bold text-marine-blue flex gap-[20px] items-center">
              <p className="text-[12px]">Monthly</p>
              <ToggleScroll />
              <p className="text-[12px]">Yearly</p>
            </div>
          </div>
        </div>
        {personalInfo.planErrMessage && <p className="text-center text-[13px] font-bold text-strawberry-red">You must choose one of the plans</p>}
      </div>
      {width >= 421 && (<div className="mt-auto flex w-full justify-between">
        <BackButton />
        <NextButton />
      </div>)}
    </div>
  );
};

export default Plan;
