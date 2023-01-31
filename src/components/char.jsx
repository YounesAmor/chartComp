// import { useState } from "react";
import data from "../services/data.json";
import Tooltip from "./tooltip";
const Chart = () => {
  return (
    <div className="flex flex-col items-center lg:w-[540px] sm:w-[350px]">
      <div className="flex bg-softRed p-6 justify-between border rounded-lg mb-4 w-full">
        <div className="text-left text-dmSans text-white">
          <p className="text-sm">My Balance</p>
          <p className="text-2xl">921.48$</p>
        </div>
        <div>
          <svg
            width="72"
            height="48"
            viewBox="0 0 72 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#382314" cx="48" cy="24" r="24" />
              <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
            </g>
          </svg>
        </div>
      </div>
      <div className="bg-veryPaleOrange border rounded-lg w-full grid grid-cols-1 divide-y-2 divide-mediumBrown lg:px-[40px] sm:px-[20px]">
        <div>
          <p className="text-left text-dmSans text-2xl lg:mt-[40px] sm:mt-[25px] mb-[45px] text-darkBrown font-medium">
            Spending - Last 7 days
          </p>
          <div className="flex mb-4">
            {data.map((element, index) => {
              const { day, amount } = element;
              const height = 3 * amount;
              let style = { height: `${height}px` };
              if (index === 2) {
                style.background = "hsl(186, 34%, 60%)";
              }
              return (
                <div
                  className="flex flex-col-reverse items-center lg:w-[50px] sm:w-[25px] lg:mr-5 sm:mr-5"
                  key={day}
                >
                  <p className="text-sm text-gray-400">{day}</p>
                  <Tooltip message={`${amount}$`}>
                    <div
                      className={`lg:w-[50px] sm:w-[40px] bg-softRed border rounded-lg mx-2 hover:bg-[#F5C8BE]`}
                      style={style}
                    ></div>
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-4 pb-10">
          <div className="flex flex-col text-left text-dmSans">
            <p className="text-md text-mediumBrown mb-1">Total this month</p>
            <div className="flex justify-between items-center">
              <p className="text-4xl font-bold text-darkBrown">$478.33</p>
              <div className="flex flex-col text-right">
                <p className="text-md text-darkBrown font-medium text-dmSans">
                  2.4%
                </p>
                <p className="text-dmSans text-sm text-mediumBrown">
                  from last month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
