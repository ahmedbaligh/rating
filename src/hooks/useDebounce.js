import { useState, useEffect } from 'react';

const useDebounce = (next, ms) => {
  const [value, setValue] = useState(next);

  useEffect(() => {
    const id = setTimeout(() => setValue(next), ms);

    return () => clearTimeout(id);
  }, [next, ms]);

  return value;
};

export default useDebounce;
