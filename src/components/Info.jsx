import React, { useEffect, useState } from "react";
import NextButton from "./NextButton";
import { useForm } from "../context/FormContext";

const Info = ({ width }) => {
  const { personalInfo, setPersonalInfo } = useForm();

  function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }

  useEffect(() => {
    setPersonalInfo({
      ...personalInfo,
      validEmail: validateEmail(personalInfo.email),
    });
  }, [personalInfo]);

  return (
    <div className="flex flex-col h-full w-full animate-slideFromRight">
      <div className="flex flex-col gap-[30px] grow">
        <div>
          <h1 className="text-[30px] text-marine-blue font-bold">
            Personal info
          </h1>
          <p className="text-cool-gray">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[5px]">
            <div className="flex justify-between items-center">
              <label
                htmlFor="name"
                className="text-[13px] font-bold text-marine-blue"
              >
                Name
              </label>
              {!personalInfo.name && personalInfo.showErrMessage && (
                <label
                  htmlFor="name"
                  className="text-[13px] font-bold text-strawberry-red"
                >
                  This field is required
                </label>
              )}
            </div>
            <input
              className={`outline-none border-[1px] p-[10px] rounded-[5px] hover:border-purplish-blue focus:border-purplish-blue ${
                !personalInfo.name && personalInfo.showErrMessage
                  ? "border-strawberry-red"
                  : "border-light-gray"
              }`}
              type="text"
              name="name"
              placeholder="e.g. Stephen King"
              value={personalInfo.name}
              onChange={(e) => {
                setPersonalInfo({
                  ...personalInfo,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex justify-between items-center">
              <label
                htmlFor="email"
                className="text-[13px] font-bold text-marine-blue"
              >
                Email Address
              </label>
              {personalInfo.showErrMessage && (
                <label
                  htmlFor="email"
                  className="text-[13px] font-bold text-strawberry-red"
                >
                  {!personalInfo.email
                    ? "This field is required"
                    : !personalInfo.validEmail
                    ? "Valid email required"
                    : null}
                </label>
              )}
            </div>
            <input
              className={`outline-none border-[1px] p-[10px] rounded-[5px] hover:border-purplish-blue focus:border-purplish-blue ${
                !personalInfo.email && personalInfo.showErrMessage
                  ? "border-strawberry-red"
                  : "border-light-gray"
              }`}
              type="text"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
              value={personalInfo.email}
              onChange={(e) => {
                setPersonalInfo({
                  ...personalInfo,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex justify-between items-center">
              <label
                htmlFor="phone"
                className="text-[13px] font-bold text-marine-blue"
              >
                Phone Number
              </label>
              {!personalInfo.phone && personalInfo.showErrMessage && (
                <label
                  htmlFor="phone"
                  className="text-[13px] font-bold text-strawberry-red"
                >
                  This field is required
                </label>
              )}
            </div>
            <input
              className={`outline-none border-[1px] p-[10px] rounded-[5px] hover:border-purplish-blue focus:border-purplish-blue ${
                !personalInfo.phone && personalInfo.showErrMessage
                  ? "border-strawberry-red"
                  : "border-light-gray"
              }`}
              type="text"
              name="phone"
              placeholder="e.g. +1 234 567 890"
              value={personalInfo.phone}
              onChange={(e) => {
                setPersonalInfo({
                  ...personalInfo,
                  phone: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </div>
      {width < 421 ? null : <NextButton />}
    </div>
  );
};

export default Info;
