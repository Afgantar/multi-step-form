import React, { useEffect, useState } from "react";
import { useForm } from "../context/FormContext";

const AddOnsCard = ({ title, desc, price }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { orderData, setOrderData, useMonth } = useForm();

  useEffect(() => {
    const exist = orderData.addOns.some((item) => item.title === title);
    if (exist) {
      setIsChecked(true);
    }
    if (!exist) {
      setIsChecked(false);
    }
  }, [orderData]);

  function addHandler() {
    const exist = orderData.addOns.some((item) => item.title === title);
    if (!exist) {
      setOrderData({
        ...orderData,
        addOns: [
          ...orderData.addOns,
          {
            title: title,
            price: `${useMonth ? price : price*10}`,
          },
        ],
      });
    }
    if (exist) {
      setOrderData({
        ...orderData,
        addOns: orderData.addOns.filter((element) => element.title !== title),
      });
    }
  }

  return (
    <div
      className={`flex gap-[10px] justify-between p-[10px] sm:p-[20px] items-center border-[1px] rounded-[5px] hover:cursor-pointer hover:border-purplish-blue transition-all ease-in-out duration-300 ${
        isChecked
          ? "bg-light-blue border-purplish-blue"
          : "bg-transparent border-light-gray"
      }`}
      onClick={addHandler}
    >
      <div className="block relative pl-[35px] select-none">
        <input
          type="checkbox"
          className="absolute opacity-0 cursor-pointer"
          // checked={isChecked}
        />
        <span
          className={`absolute top-[-11px] left-0 h-[21px] w-[21px] rounded-[5px] border-[1px] border-light-gray transition-all ease-in-out duration-300 after:content[''] after:absolute after:left-[7px] after:top-[3px] after:w-[5px] after:h-[10px] after:border-solid after:border-white after:border-b-[2px] after:border-r-[2px] after:rotate-[45deg] ${
            isChecked ? "bg-purplish-blue after:block" : "bg-white after:hidden"
          }`}
        ></span>
      </div>
      <div className="flex flex-col select-none grow">
        <p className="text-marine-blue font-bold mobile:text-[14px] text-[13px]">{title}</p>
        <p className="text-cool-gray mobile:text-[14px] text-[11px]">{desc}</p>
      </div>
      <div className="select-none">
        <p className="text-purplish-blue font-medium">
          +${useMonth ? price : price * 10}/{useMonth ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default AddOnsCard;
