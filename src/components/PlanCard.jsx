import React, { useEffect, useState } from "react";
import { useForm } from "../context/FormContext";

const PlanCard = ({ picture, text, price }) => {
  const {orderData, setOrderData, useMonth} = useForm();
  const [selected, setSelected] = useState(false);

  function planHandler() {
    setOrderData({
      ...orderData,
      planName: text,
      planPrice: `${useMonth ? price : price*10}`,
    })
  }

  useEffect(() => {
    if(orderData.planName === text) {
      setSelected(true);
    }
    else {
      setSelected(false);
    }
  }, [orderData])

  return (
    <div className={`flex-1 flex flex-col border-[1px] rounded-[10px] p-[12px] rounded-[10px]hover:cursor-pointer hover:border-purplish-blue transition-all ease-in-out duration-300 hover:cursor-pointer ${selected ? "border-purplish-blue bg-magnolia" : "border-light-gray bg-transparent"}`} onClick={planHandler}>
      <img src={picture} alt="" width={40} />
      <div className="mt-[30px]">
        <h1 className="font-bold text-marine-blue">{text}</h1>
        <p className="text-cool-gray text-[13px]">${useMonth ? price : price*10}/{useMonth ? "mo" : "yr"}</p>
        {!useMonth && (
          <p className="text-[11px] text-marine-blue font-bold">2 months free</p>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
