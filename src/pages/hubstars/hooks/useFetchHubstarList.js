import { useEffect, useState } from 'react';

export const useFetchHubstarList = () => {
  const [hubList, setHubList] = useState([]);
  const [hubListCard, setHubListCard] = useState([]);

  const getListHubstar = async () => {
    fetch('https://hubhr.herokuapp.com/api/associate-list')
      .then((response) => response.json())
      .then((json) => {
        setHubList(json);
        setHubListCard(json);
      });
  };

  useEffect(() => {
    getListHubstar();
  }, []);

  return {
    hubList,
    hubListCard,
    setHubList,
  };
};
