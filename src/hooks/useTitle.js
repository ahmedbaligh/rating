import { useEffect } from 'react';

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} | Rating Hub`;
  }, [title]);
};

export default useTitle;
