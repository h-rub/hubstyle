import { useEffect, useState, useContext } from 'react';
import StateContext from '../../../context/StateContext';

const useFetchHubstarList = () => {
  const [hubList, setHubList] = useState([]);
  const [hubListCard, setHubListCard] = useState([]);

  const { reloadHubstarList, setReloadHubstarList } = useContext(StateContext);

  const getListHubstar = async () => {
    fetch('https://hubhr.herokuapp.com/api/associate-list')
      .then((response) => response.json())
      .then((json) => {
        setHubList(json);
        setHubListCard(json);
      });
    setReloadHubstarList(false);
  };

  useEffect(() => {
    getListHubstar();
  }, [reloadHubstarList]);

  return {
    hubList,
    hubListCard,
    setHubList,
  };
};

export default useFetchHubstarList;
