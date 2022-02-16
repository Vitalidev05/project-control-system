import { useEffect, RefObject } from 'react';

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  closeMenu: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      closeMenu();
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, closeMenu]);
};

export default useOnClickOutside;
