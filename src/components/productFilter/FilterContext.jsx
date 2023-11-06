/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilter = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [showMen, setShowMen] = useState(true);
  const [showWomen, setShowWomen] = useState(true);
  const [showChild, setShowChild] = useState(false);

  const toggleMenFilter = () => {
    setShowMen(!showMen);
  };

  const toggleWomenFilter = () => {
    setShowWomen(!showWomen);
  };

  const toggleChildFilter = () => {
    setShowChild(!showChild);
  };

  return (
    <FilterContext.Provider
      value={{
        showMen,
        showWomen,
        toggleMenFilter,
        toggleWomenFilter,
        showChild,
        toggleChildFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
