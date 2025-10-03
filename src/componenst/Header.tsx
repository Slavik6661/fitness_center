"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import useTimer from "../hooks/useTimer";
import { useDiscount } from "@/app/providers/DiscountProvider";

const Header = () => {
  const { discountActive, setDiscountActive, setIsBlinking } = useDiscount();
  const { formattedTime, isBlinking, hasEnded } = useTimer({
    initialTime: 120,
    onTimeEnd: () => {
      setDiscountActive(false);
    },
  });

  useEffect(() => {
    setIsBlinking(isBlinking);
  }, [isBlinking]);
  return (
    <div
      className="flex flex-col justify-center items-center w-[100%] h-[100px] bg-[#1D5B43]
      min-sm:h-[103px]
      max-sm:h-[85px]
      xss:h-[74px]
    "
    >
      <p
        className="font-semibold text-2xl leading-[130%] tracking-[0%] text-center
        font-family: Montserrat
        font-style: SemiBold
        leading-trim: NONE
        font-variant-numeric-figure: lining-nums
        font-variant-numeric-spacing: proportional-nums
        min-sm:text-[24px]
        max-sm:text-[18px]
        xss:text-[14px]
        "
      >
        Успейте открыть пробную неделю
      </p>
      <div className="flex flex-row items-center gap-2">
        <Image src="/Star 3.svg" alt="timer" width={14} height={14} />

        <div
          className={`font-bold text-[40px] text-[#FFBB00] leading-[110%] tracking-[0%] uppercase
        timer
        font-style: Bold
        leading-trim: NONE
        font-variant-numeric-figure: lining-nums
        font-variant-numeric-spacing: proportional-nums
        ${isBlinking ? "animate-pulse text-red-500" : "text-[#FFBB00]"}
        min-sm:text-[40px]
        max-sm:text-[32px]
        xss:text-[28px]
     
        `}
        >
          {formattedTime}
        </div>

        <Image src="/Star 3.svg" alt="timer" width={14} height={14} />
      </div>
    </div>
  );
};

export default Header;
