import React from "react";
import SideIndicator from "./SideIndicator";
import SideMobile from "/bg-sidebar-mobile.svg"

const TopBar = ({width}) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[-10] bg-cover aspect-[375/172] flex justify-center items-start py-[30px]" style={{ backgroundImage: `url(${SideMobile})` }}>
      <div className="flex flex-row gap-[20px]">
        <SideIndicator number={`1`} text={`YOUR INFO`} width={width} />
        <SideIndicator number={`2`} text={`SELECT PLAN`} width={width} />
        <SideIndicator number={`3`} text={`ADD-ONS`} width={width} />
        <SideIndicator number={`4`} text={`SUMMARY`} width={width} />
      </div>
    </div>
  );
};

export default TopBar;
