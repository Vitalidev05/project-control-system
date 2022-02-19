import { useState, useRef } from 'react';
import { useOnClickOutside } from '../../../utils/useOnClickOutside';

export const useHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setOpen(false));

  return { open, node, setOpen };
};
