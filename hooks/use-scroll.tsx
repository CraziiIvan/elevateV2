"use client";

import { useEffect, useState } from "react";
import { throttle } from "es-toolkit";

export function useScroll(throttleMs = 200) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollValue = window.scrollY;
      setScrollValue(currentScrollValue);
      
      if (currentScrollValue === 0) {
        setIsScrolling(false);
        return;
      }
      
      setIsScrolling(true);
    };

    const throttledHandleScroll = throttle(handleScroll, throttleMs);

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [throttleMs]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    if (isScrolling) {
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, throttleMs);
    }

    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isScrolling, throttleMs]);

  return { isScrolling, scrollValue };
}
