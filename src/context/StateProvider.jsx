import React, { useState, useEffect } from 'react';
import StateContext from './StateContext';
import { useNavigate } from 'react-router-dom';

const StateProvider = ({ children }) => {
  // ESTADOS PARA LOS BANNERS
  const [bannerSuccessOpen, setBannerSuccessOpen] = useState(false);
  const [bannerErrorOpen, setBannerErrorOpen] = useState(false);
  const [banner2SuccessOpen, setBanner2SuccessOpen] = useState(false);
  const [banner2ErrorOpen, setBanner2ErrorOpen] = useState(false);
  const [reloadHubstarList, setReloadHubstarList] = useState(false);
  // ESTADO PARA GUARDAR LOS TITULOS DEL PUESTO
  const [jobList, setJobList] = useState([]);
  const [updateJobList, setUpdateJobList] = useState(false);
  //ESTADO PARA GUARDAR LAS CIUDADES
  const [countryAll, setCountryAll] = useState([]);

  // API VALIDACION DE TOKEN
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
        return console.log('estamos validando el token');
      } else {
        navigate('/signin');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        console.log('Lo sentimos tu token ya caduco, vuelve a iniciar sesion');
      }
    });
  }

  // API PARA LOS TITULOS DEL PUESTO
  const jobTitleList = async () => {
    fetch('https://hubhr.herokuapp.com/api/list-job-titles/')
      .then((response) => response.json())
      .then((json) => setJobList(json));
    setUpdateJobList(true);
  };

  useEffect(() => {
    jobTitleList();
  }, [updateJobList]);

  //API PARA LAS CIUDADES
  const countryList = async () => {
    fetch('https://hubhr.herokuapp.com/api/list-countries/')
      .then((response) => response.json())
      .then((json) => setCountryAll(json));
  };

  useEffect(() => {
    countryList();
  }, []);

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
        jobList,
        setJobList,
        countryAll,
        setUpdateJobList,
        setBanner2SuccessOpen,
        banner2SuccessOpen,
        banner2ErrorOpen,
        setBanner2ErrorOpen,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
