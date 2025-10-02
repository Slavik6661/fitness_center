"use client";
import { useState, useEffect } from "react";

const useWindowWidth = (offset = 0) => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const handleResize = () => {
      const newWidth = window.innerWidth - offset;
      setWindowWidth(newWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowWidth;
};

export default useWindowWidth;
