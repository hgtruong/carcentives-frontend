import { useState } from 'react';
import axios from 'axios';

function useAPIService() {
  const [data, setData]  = useState([]);
  const [isLoading, setIsLoading]  = useState(false);
  const [error, setError]  = useState(false);

  function init() {
    setData([]);
    setIsLoading(false);
    setError(false);
  }

  const serviceCall = async (url, method, params, payLoad) => {
    init();
    setIsLoading(true);

    try {
      const result = await axios({
        url: `${url}`,
        method: `${method}`,
        params: params,
        data: payLoad
      });
      setData(result.data);
    } catch (error) {
      console.log(`Error with ${method} API call for url: ${url}`);
      console.log(`Error is: ${error}`)
      setError(true);
    }
    setIsLoading(false);
  }

  return [{ data, isLoading, error}, serviceCall, setData];
}

export { useAPIService };