import { useEffect } from "react";

const useOutsideClick = (
  ref: React.MutableRefObject<HTMLElement | null>,
  callBack: () => void,
) => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callBack();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideClick;
