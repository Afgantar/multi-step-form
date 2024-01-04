import React, { createContext, useContext, useEffect, useState } from "react";

const FormContext = createContext();

export function useForm() {
  return useContext(FormContext);
}

export function FormContextProvider({ children }) {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    validEmail: false,
    showErrMessage: false,
    planErrMessage: false,
  });
  const [orderData, setOrderData] = useState({
    planName: "",
    planPrice: "",
    addOns: [],
  });
  const [stage, setStage] = useState(1);
  const [finish, setFinish] = useState(false);
  const [useMonth, setUseMonth] = useState(true);
  const [tempMonth, setTempMonth] = useState(true);

  useEffect(() => {
    if(tempMonth && !useMonth) {
      setOrderData({
        ...orderData,
        planPrice: (parseInt(orderData.planPrice) * 10).toString(),
        addOns: orderData.addOns.map((addOn) => ({
          ...addOn,
          price: (parseInt(addOn.price) * 10).toString(),
        }))
      });
      setTempMonth(prevTempMonth => !prevTempMonth);
    }
    if(!tempMonth && useMonth) {
      setOrderData({
        ...orderData,
        planPrice: (parseInt(orderData.planPrice) / 10).toString(),
        addOns: orderData.addOns.map((addOn) => ({
          ...addOn,
          price: (parseInt(addOn.price) / 10).toString(),
        }))
      });
      setTempMonth(prevTempMonth => !prevTempMonth);
    }
  }, [useMonth]);

  return (
    <FormContext.Provider value={{ stage, setStage, finish, setFinish, personalInfo, setPersonalInfo, orderData, setOrderData, useMonth, setUseMonth }}>
      {children}
    </FormContext.Provider>
  )
}