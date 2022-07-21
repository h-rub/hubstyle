import React, { useState } from 'react';
import StateContext from './StateContext';

const StateProvider = ({ children }) => {
  const [bannerSuccessOpen, setBannerSuccessOpen] = useState(false);
  const [bannerErrorOpen, setBannerErrorOpen] = useState(false);
  const [reloadHubstarList, setReloadHubstarList] = useState(false);

  return (
    <StateContext.Provider
      value={{
        bannerSuccessOpen,
        setBannerSuccessOpen,
        bannerErrorOpen,
        setBannerErrorOpen,
        reloadHubstarList,
        setReloadHubstarList,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
