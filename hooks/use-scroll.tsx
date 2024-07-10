"use client";

import { useEffect, useState } from "react";
import { throttle } from "es-toolkit";

export function useScroll(throttleMs = 200) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const element = document.querySelector("#main");

    if (!element) {
      return;
    }

    let scrollTimeout: NodeJS.Timeout;

    const delayFunction =  throttle(() => {
      setIsScrolling(true);
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, throttleMs);
    }, throttleMs);

    const handleScroll = () => {
      if (element.scrollTop === 0) {
        setIsScrolling(false)
        return;
      }
      
      delayFunction();
    }


    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [throttleMs]);

  return isScrolling;
}
