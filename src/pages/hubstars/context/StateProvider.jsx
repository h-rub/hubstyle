import React, { useState } from 'react';
import StateContext from './StateContext';
import { useNavigate } from 'react-router-dom';

const StateProvider = ({ children }) => {
  // ESTADOS PARA LOS COMPONENTE USERTILES
  const [bannerSuccessOpen, setBannerSuccessOpen] = useState(false);
  const [bannerErrorOpen, setBannerErrorOpen] = useState(false);
  const [reloadHubstarList, setReloadHubstarList] = useState(false);

  // VALIDACION DE TOKEN
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');
  const navigate = useNavigate();

  let dataUser = {
    token,
    email,
  };

  async function tokenValid(dataUser) {
    return fetch('https://hubhr.herokuapp.com/auth/validate-token/', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-type': 'application/json; Access-Control-Allow-Origin: *',
      },
      body: JSON.stringify(dataUser),
    }).then((response) => {
      if (response.status === 200) {
        return;
      } else {
        navigate('/signin');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        console.log('Lo sentimos tu token ya caduco, vuelve a iniciar sesion');
      }
    });
  }
  return (
    <StateContext.Provider
      value={{
        bannerSuccessOpen,
        setBannerSuccessOpen,
        bannerErrorOpen,
        setBannerErrorOpen,
        reloadHubstarList,
        setReloadHubstarList,
        dataUser,
        tokenValid,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
