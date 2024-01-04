import React from "react";
import ThankYou from "../assets/images/icon-thank-you.svg";

const Thanks = () => {
  return (
    <div className="flex flex-col max-w-[380px] justify-center items-center gap-[40px] animate-summon">
      <img src={ThankYou} alt="Thank you" width={80} />
      <div className="flex flex-col gap-[20px] justify-center items-center">
        <h1 className="text-[30px] text-marine-blue font-bold">Thank you!</h1>
        <p className="text-center text-cool-gray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Thanks;
