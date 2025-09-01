import React, { useState } from "react";
import { useEffect } from "react";

export default function useResponsiveImage(desktopImg, mobileImg, breakpoints = 600) {
  const [bg, setBg] = useState(desktopImg);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < breakpoints) {
        setBg(mobileImg);
      } else {
        setBg(desktopImg);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [desktopImg, mobileImg, breakpoints]);
  return bg;
}
