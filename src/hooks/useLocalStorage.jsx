import { useEffect, useState } from 'react';
import { handleLoadOnLocalStorage, handleSaveOnLocalStorage } from '../helpers/LocalStorageAPI';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return handleLoadOnLocalStorage('savedContacts') ?? defaultValue;
  });

  useEffect(() => {
    handleSaveOnLocalStorage(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
