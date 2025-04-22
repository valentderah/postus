import React, {createContext, useContext} from 'react';

export const PagesContext = createContext();

export const usePages = () => useContext(PagesContext);