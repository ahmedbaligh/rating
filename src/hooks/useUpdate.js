import { useEffect, useRef } from 'react';

const useUpdate = (effect, dependencies) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) hasMounted.current = true;
    else effect();
  }, [dependencies, effect, hasMounted]);
};

export default useUpdate;
