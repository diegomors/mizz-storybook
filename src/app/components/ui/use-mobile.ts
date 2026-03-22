import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

/** Hook que detecta se o dispositivo é mobile baseado na largura da janela */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
