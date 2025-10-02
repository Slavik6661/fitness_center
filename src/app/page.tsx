import Image from "next/image";
import Card from "../componenst/Card";
import TariffsPage from "@/componenst/cardList";

export default function Home() {
  return (
    <div className="font-sans flex min-h-screen p-8 pb-20 gap-16 bg-[#232829] max-sm:p-4">
      <main className="flex justify-start flex-col gap-[32px] m-[0_auto] row-start-2 items-center sm:items-start">
        <div
          className=" font-bold text-[40px] leading-[110.00000000000001%] tracking-[1%]
            font-family: Montserrat
            font-style: Bold
            leading-trim: NONE
            max-sm:text-[24px]
            "
        >
          <span>
            Выбери подходящий для себя{" "}
            <span className="text-[#FDB056]">тариф</span>
          </span>
        </div>
        <div className="flex flex-col gap-[66px] max-sm:gap-[24px]">
          <div className="w-full max-w-[1216px] flex flex-row max-sm:flex-col">
            <div className="flex-shrink-0 m-[0_auto]">
              <img
                src="/giga.png"
                className="object-contain mt-[28%] 
                min-sm:w-[380px] min-sm:h-[700px] 
                max-sm:w-[200px] max-sm:h-[250px] max-sm:mt-0 
               
                "
              />
            </div>
            <TariffsPage />
          </div>
          <div
            className="flex flex-col gap-[30px] w-full max-w-[1216px] border border-[#484D4E] rounded-[30px] p-5 
          max-sm:gap-[10px]
          max-sm:p-[12px] 
          "
          >
            <div
              className="w-full max-w-[461px] h-[68px] flex justify-center items-center border-[1px] bg-[#81FE95]/[0.1]
            border-[#81FE95] p-5 rounded-[30px]"
            >
              <p
                className="text-[#81FE95] font-medium text-[28px] leading-[120%] tracking-[0%]
                font-family: Montserrat
                font-style: Medium
                leading-trim: NONE
                min-sm:text-[28px]
                max-sm:text-[18px]
                xss:text-[16px]
                "
              >
                гарантия возврата 30 дней
              </p>
            </div>
            <p
              className="w-full max-w-[1100px] font-normal text-2xl text-[#DCDCDC] leading-[130%] tracking-[0px]
                font-family: Montserrat
                font-style: Regular
                leading-trim: NONE
                min-sm:text-[24px]
                max-md:text-[14px]
                xss:text-[13px]"
            >
              Мы уверены, что наш план сработает для тебя и ты увидишь видимые
              результаты уже через 4 недели! Мы даже готовы полностью вернуть
              твои деньги в течение 30 дней с момента покупки, если ты не
              получишь видимых результатов.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
