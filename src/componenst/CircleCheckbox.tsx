import { useState } from "react";

const CircleCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [errorPayment, setErrorPayment] = useState(false);

  const validateCheckbox = () => {
    !isChecked ? setErrorPayment(true) : setErrorPayment(false);
  };

  return (
    <>
      <label className="flex items-center space-x-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="hidden"
        />
        <div
          className={`
        relative w-8 h-8 border-2 rounded-sm flex items-center justify-center 
        bg-transparent border-[#606566] shadow-lg transform scale-105
        transition-all duration-200 ease-in-out
        ${
          errorPayment
            ? "bg-transparent border-[#FD5656] shadow-lg transform scale-105"
            : "bg-transparent border-[#606566]"
        }
      `}
        >
          {/* Галочка */}
          {isChecked && (
            <svg
              className="w-5 h-5 text-[#FDB056] animate-scaleIn"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}

          {/* {isChecked && (
          <div className="absolute inset-0 rounded-sm bg-[#FDB056] animate-ping opacity-75"></div>
        )} */}
        </div>
        <span
          className="w-full max-w-[605px] flex font-normal text-base text-[#CDCDCD] leading-[110.00000000000001%] tracking-[0%] align-bottom
        font-family: Montserrat
        font-style: Regular
        leading-trim: NONE
        max-sm:text-[12px]"
        >
          <p>
            Я согласен с{" "}
            <a href="#" className="underline">
              офертой рекуррентных платежей
            </a>{" "}
            и{" "}
            <a href="#" className="underline">
              Политикой конфиденциальности
            </a>
          </p>
        </span>
      </label>

      <button
        onClick={validateCheckbox}
        className="w-full max-w-[352px] my-[12px_6px] h-[66px] bg-[#FDB056] text-[#191E1F] rounded-[20px] font-bold text-xl leading-[130%] tracking-[0px] align-middle
            font-family: Montserrat
            font-style: Bold
            leading-trim: NONE"
      >
        Купить
      </button>
    </>
  );
};
export default CircleCheckbox;
