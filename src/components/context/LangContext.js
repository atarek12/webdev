import { createContext } from 'react';

export const LangContext = createContext({
  isEnglish: true,
  setArabic: () => { },
  setEnglish: () => { }
});

