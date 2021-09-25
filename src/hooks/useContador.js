import { useState } from "react";

export const useContador = (initial) => {
  // eslint-disable-next-line no-undef
  const [contador, setContador] = useState(initial);
  const incremetar = () => {
    setContador(contador + 1);
  };
  return {
    contador,
    incremetar,
  };
};
