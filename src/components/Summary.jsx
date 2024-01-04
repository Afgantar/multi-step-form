import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { useForm } from "../context/FormContext";

const Summary = ({ width }) => {
  const { setFinish, useMonth, orderData, setStage } = useForm();
  const [total, setTotal] = useState("");

  function confirmHandler() {
    setFinish(true);
  }

  useEffect(() => {
    const planPrice = parseInt(orderData.planPrice);
    let addOnPrice = 0;
    orderData.addOns.forEach(element => {
        addOnPrice += parseInt(element.price);
    });
    const totalPrice = (planPrice + addOnPrice).toString();
    setTotal(totalPrice);
  }, [orderData]);

  return (
    <div className="flex flex-col h-full w-full animate-slideFromRight">
      <div className="flex flex-col gap-[30px] grow">
        <div>
          <h1 className="text-[30px] text-marine-blue font-bold">
            Finishing up
          </h1>
          <p className="text-cool-gray">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="w-full bg-magnolia p-[20px] rounded-[6px] flex flex-col gap-[20px]">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <p className="font-bold text-marine-blue">
                  {orderData.planName} ({useMonth ? "Monthly" : "Yearly"})
                </p>
                <p
                  className="text-cool-gray underline cursor-pointer hover:text-purplish-blue"
                  onClick={() => {
                    setStage(2);
                  }}
                >
                  Change
                </p>
              </div>
              <p className="font-bold text-marine-blue">
                ${orderData.planPrice}/{useMonth ? "mo" : "yr"}
              </p>
            </div>
            <div className="w-full h-[1px] bg-light-gray"></div>
            {orderData.addOns.map((addOn) => (
              <div key={addOn.title} className="flex justify-between items-center w-full">
                <p key={addOn.title + "title"} className="text-cool-gray">{addOn.title}</p>
                <p key={addOn.title + "price"} className="text-marine-blue">+${addOn.price}/{useMonth ? "mo" : "yr"}</p>
              </div>
            ))}
          </div>
          <div className="px-[20px] flex justify-between items-center w-full">
            <p className="text-cool-gray">Total (per {useMonth ? "month" : "year"})</p>
            <p className="text-[18px] font-bold text-purplish-blue">+${total}/{useMonth ? "mo" : "yr"}</p>
          </div>
        </div>
      </div>
      {width >= 421 && (<div className="mt-auto flex w-full justify-between">
        <BackButton />
        <button
          className="self-end mt-auto bg-purplish-blue text-alabaster p-[10px] px-[20px] rounded-[10px] font-bold active:opacity-90"
          onClick={confirmHandler}
        >
          Confirm
        </button>
      </div>)}
    </div>
  );
};

export default Summary;
