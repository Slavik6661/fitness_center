"use client";
import { useState } from "react";
import { useTariffs } from "@/hooks/useTariffs";
import Card from "./Card";
import Image from "next/image";
import CardVertical from "./CardVertical";
import CircleCheckbox from "./CircleCheckbox";
import useWindowWidth from "@/hooks/useWindowWidth";

const TariffsPage = () => {
  const width = useWindowWidth();
  const [activeCard, setActiveCard] = useState<number | null>(0);
  const { tariffs, loading, error } = useTariffs();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-lg">Загрузка тарифов...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-red-500 text-lg">Ошибка загрузки: {error}</div>
      </div>
    );
  }
  const [firstTariff, ...restTariffs] = tariffs;
  console.log("firstTariff", firstTariff);
  console.log("restTariffs", restTariffs);

  return (
    <div className="container mx-auto">
      <div className="w-full max-w-[748px] flex flex-col gap-2">
        {width < 1280 && (
          <div className="grid grid-cols-1 gap-2">
            {tariffs.map((tariff, index) => (
              <Card
                id={index}
                key={index}
                width={"auto"}
                height={"131"}
                orientation="horizontal"
                period={tariff.period}
                price={tariff.price}
                fullPrice={tariff.full_price}
                text={tariff.text}
                isBest={tariff.is_best}
                activeCard={activeCard}
                onClick={() => setActiveCard(index)}
              />
            ))}
          </div>
        )}
        {width >= 1280 && (
          <>
            <div className="grid grid-cols-1">
              {tariffs.slice(0, 1).map((tariff, index) => (
                <Card
                  id={index}
                  key={index}
                  width={"748"}
                  height={"190"}
                  orientation="horizontal"
                  period={tariff.period}
                  price={tariff.price}
                  fullPrice={tariff.full_price}
                  text={tariff.text}
                  isBest={tariff.is_best}
                  activeCard={activeCard}
                  onClick={() => setActiveCard(index)}
                />
              ))}
            </div>
            <div className="grid gap-6 min-xl:grid-cols-3 max-xl:grid-cols-1">
              {tariffs.slice(1, tariffs.length).map((tariff, index) => (
                <CardVertical
                  id={index + 1}
                  key={index}
                  width={"240"}
                  height={"335"}
                  orientation="vertical"
                  period={tariff.period}
                  price={tariff.price}
                  fullPrice={tariff.full_price}
                  text={tariff.text}
                  isBest={tariff.is_best}
                  activeCard={activeCard}
                  onClick={() => setActiveCard(index + 1)}
                />
              ))}
            </div>
          </>
        )}

        <div className="w-full max-w-[500px] flex mt-[12px] rounded-[20px] bg-[#2D3233]">
          <Image
            src="/alert 1.svg"
            alt="timer"
            width={24}
            height={26}
            className="ml-[20px] pb-[25px]"
          />
          <p
            className="w-full max-w-[445px] py-[18px] pr-[20px] font-normal text-base leading-[130%] tracking-[0px]font-family: Montserrat
            font-style: Regular
            leading-trim: NONE
            max-sm:text-[12px]
            "
          >
            Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
            результат, чем за 1 месяц
          </p>
        </div>

        <div className="mt-[30px]">
          <CircleCheckbox />
        </div>

        <p
          className="font-normal text-sm text-[#9B9B9B] leading-[120%] tracking-[0%] align-bottom
            font-family: Montserrat
            font-style: Regular
            leading-trim: NONE
            max-sm:text-[10px]
            "
        >
          Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
          денежных средств для получения пожизненного доступа к приложению.
          Пользователь соглашается, что данные кредитной/дебетовой карты будут
          сохранены для осуществления покупок дополнительных услуг сервиса в
          случае желания пользователя.
        </p>
      </div>
    </div>
  );
};
export default TariffsPage;
