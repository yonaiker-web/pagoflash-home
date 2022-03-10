import { useRef, useLayoutEffect, RefObject, DependencyList } from "react";

const isBrowser = typeof window !== `undefined`;

interface GetScrollPositionData {
  element?: RefObject<HTMLElement>;
  useWindow?: boolean;
}

function getScrollPosition({ element, useWindow }: GetScrollPositionData) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target!.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

interface UseScrollPositionParams {
  element?: RefObject<HTMLElement>;
  useWindow?: boolean;
  wait?: number;
}

type Position = {
  x: number;
  y: number;
};

export function useScrollPosition(
  effect: (data: { prevPos: Position; currPos: Position }) => any,
  deps?: DependencyList,
  { element, useWindow, wait }: UseScrollPositionParams = {}
) {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout: NodeJS.Timeout | null = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (!wait) {
        callBack();
      } else if (throttleTimeout === null) {
        throttleTimeout = setTimeout(callBack, wait);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
}
