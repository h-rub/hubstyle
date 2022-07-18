import { useEffect, useState } from 'react';

export const useFetchHubstarList = () => {
  const [hubList, setHubList] = useState([]);
  const [hubListCard, setHubListCard] = useState([]);
  const [reloadHubstarList, setReloadHubstarList] = useState(false);

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
    setReloadHubstarList,
  };
};
