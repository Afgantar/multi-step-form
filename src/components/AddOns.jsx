import React from "react";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import AddOnsCard from "./AddOnsCard";

const AddOns = ({ width }) => {
  const addOnData = [
    {
      title: "Online service",
      desc: "Access to multiplayer games",
      price: "1",
    },
    {
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: "2",
    },
    {
      title: "Customizable profile",
      desc: "Custome theme on your profile",
      price: "2",
    }
  ];

  return (
    <div className="flex flex-col h-full w-full animate-slideFromRight">
      <div className="flex flex-col gap-[30px] grow">
        <div>
          <h1 className="text-[30px] text-marine-blue font-bold">
            Pick add-ons
          </h1>
          <p className="text-cool-gray">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="flex flex-col gap-[20px]">
          {addOnData.map((addOn) => (
            <AddOnsCard key={addOn.title} title={addOn.title} desc={addOn.desc} price={addOn.price} />
          ))}
        </div>
      </div>
      {width >= 421 && (<div className="mt-auto flex w-full justify-between">
        <BackButton />
        <NextButton />
      </div>)}
    </div>
  );
};

export default AddOns;
