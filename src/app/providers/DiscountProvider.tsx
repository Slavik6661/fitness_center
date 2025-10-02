"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
type DiscountContextType = {
  discountActive: boolean;
  isBlinking: boolean;
  setIsBlinking: (v: boolean) => void;
  setDiscountActive: (v: boolean) => void;
};
export const DiscountContext = createContext<DiscountContextType | undefined>(
  undefined
);
export const DiscountProvider = ({ children }: { children: ReactNode }) => {
  const [discountActive, setDiscountActive] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);
  return (
    <DiscountContext.Provider
      value={{ discountActive, setDiscountActive, isBlinking, setIsBlinking }}
    >
      {children}
    </DiscountContext.Provider>
  );
};

export const useDiscount = (): DiscountContextType => {
  const ctx = useContext(DiscountContext);
  if (!ctx) {
    throw new Error("useDiscount must be used within a DiscountProvider");
  }
  return ctx;
};
