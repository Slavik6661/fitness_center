import { FC, useEffect, useState } from "react";
import { useDiscount } from "@/app/providers/DiscountProvider";
interface CardProps {
  id: number;
  width: string;
  height: string;
  orientation?: "horizontal" | "vertical";
  period: string;
  price: number;
  fullPrice: number;
  text: string;
  isBest?: boolean;
  activeCard?: number | null;
  onClick?: (id: number) => void;
}
const Card: FC<CardProps> = ({
  id,
  width,
  height,
  orientation,
  period,
  price,
  fullPrice,
  text,
  isBest,
  activeCard,
  onClick,
}) => {
  const { discountActive, isBlinking } = useDiscount();

  const [startExitAnim, setStartExitAnim] = useState(false);
  const [showOldPrice, setShowOldPrice] = useState(true);
  const [animateNewPrice, setAnimateNewPrice] = useState(false);

  useEffect(() => {
    if (!discountActive) {
      // запускаем анимацию ухода старой цены
      setStartExitAnim(true);

      // через 500мс (длительность анимации) скрываем её
      setTimeout(() => setShowOldPrice(false), 500);

      // через 800мс показываем новую цену сверху вниз
      setTimeout(() => setAnimateNewPrice(true), 800);
    }
  }, [discountActive]);

  return (
    <div
      onClick={() => onClick?.(id)}
      className={`w-full max-w-[748px] flex justify-center items-center border-[2px] bg-[#313637] rounded-[34px] gap-10 relative
        xss:gap-[30px]
      ${orientation === "horizontal" ? "flex-row" : "flex-col"}
      ${activeCard === id ? "border-[#FDB056]" : "border-[#484D4E]"}
      `}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div
        className="absolute top-[8%] right-[4%] font-medium text-[22px] text-[#FDB056] leading-[130%] tracking-[3%]
        font-family: Montserrat
        font-style: Medium
        leading-trim: NONE
        min-sm:text-[22px]
        max-sm:text-[16px]
        xss:text-[13px]
        "
      >
        {isBest && "хит!"}
      </div>
      <div
        className="absolute top-0 left-[5%] px-2 py-[5px] font-medium text-[22px] rounded-[0px_0px_8px_8px]
        bg-[#FD5656] leading-[130%] tracking-[0%]
        font-family: Gilroy
        font-style: Medium
        leading-trim: NONE
        min-sm:text-[22px]
        max-sm:text-[16px]
        max-sm:left-[66%]
        xss:text-[13px]
        "
      >
        -{Math.round(((fullPrice - price) / fullPrice) * 100)}%
      </div>
      <div className="flex flex-col items-start mt-[10px]">
        <p
          className={`font-medium text-[26px] leading-[120%] tracking-[0%]
          font-family: Montserrat
          font-style: Medium
          leading-trim: NONE
          min-sm:text-[26px]
          max-sm:text-[18px]
          xss:text-[16px] mb-[12px]`}
        >
          {period}
        </p>

        <div className="flex flex-col items-end">
          {showOldPrice && (
            <p
              className={`font-semibold text-[50px] leading-[100%] tracking-[0%]
          font-family: Montserrat
          font-style: SemiBold
          leading-trim: NONE
          min-sm:text-[50px]
          max-sm:text-[34px]
          xss:text-[30px]
          ${isBest ? "text-[#FDB056]" : "text-white"}
          ${isBlinking ? "animate-pulse text-[#FFBB00]" : "text-[#FFBB00]"}
          ${startExitAnim ? "animate-slide-right" : ""}
          `}
            >
              {price} ₽
            </p>
          )}

          {!showOldPrice && (
            <p
              className={`font-semibold text-[50px] leading-[100%] tracking-[0%]
          font-family: Montserrat
          font-style: SemiBold
          leading-trim: NONE
          min-sm:text-[50px]
          max-sm:text-[34px]
          xss:text-[30px]
          ${isBest ? "text-[#FDB056]" : "text-white"}
          ${startExitAnim ? "animate-slide-down" : ""}
          `}
            >
              {fullPrice} ₽
            </p>
          )}

          <p
            className={`font-normal text-2xl leading-[120%] tracking-[0%] text-[#919191]
          font-family: Montserrat
          font-style: Regular
          leading-trim: NONE
          line-through
          ${!showOldPrice && startExitAnim ? "animate-slide-down" : ""}
          min-sm:text-[24px]
          max-sm:text-[16px]
          xss:text-[14px]
          `}
          >
            {discountActive ? fullPrice : price} ₽
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <p
          className="w-full max-w-[328px] h-[62px] font-normal text-base leading-[130%] tracking-[0%]
          font-family: Montserrat
          font-style: Regular
          leading-trim: NONE
          min-sm:text-[16px]
          max-sm:text-[14px]
          max-sm:w-[120px]
          xss:text-[14px]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
