import { useEffect, useState } from 'react';

export const useFetchHubstarList = () => {
  const [hubList, setHubList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getListHubstar = async () => {
    fetch('https://hubhr.herokuapp.com/api/associate-list')
      .then((response) => response.json())
      .then((json) => {
        setHubList(json);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getListHubstar();
  }, []);

  return {
    hubList,
    isLoading,
  };
};
