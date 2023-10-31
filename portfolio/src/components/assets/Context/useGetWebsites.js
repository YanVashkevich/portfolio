import { useState } from 'react'

export const useGetWebSites = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [webSites, setWebSites] = useState([]);

  const callAPI = () => {
    fetch('https://6489b61b5fa58521cab01a3f.mockapi.io/sites')
    .then(response => response.json())
    .then((json) => {
      setIsLoading(false)
      setWebSites(json)
    })
    .catch(error => console.error(error));

      };

  return { isLoading, webSites, callAPI }
};