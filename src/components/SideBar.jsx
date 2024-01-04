import React from "react";
import SideIndicator from "./SideIndicator";
import SideDesktop from "../assets/images/bg-sidebar-desktop.svg"

const SideBar = ({width}) => {
  return (
    <div className="sm:aspect-[274/568] aspect-[200/568] bg-cover box-border p-[30px] animate-slideFromLeft" style={{ backgroundImage: `url(${SideDesktop})` }}>
      <div className="flex flex-col gap-[20px]">
      <SideIndicator number={`1`} text={`YOUR INFO`} width={width} />
        <SideIndicator number={`2`} text={`SELECT PLAN`} width={width} />
        <SideIndicator number={`3`} text={`ADD-ONS`} width={width} />
        <SideIndicator number={`4`} text={`SUMMARY`} width={width} />
      </div>
    </div>
  );
};

export default SideBar;
