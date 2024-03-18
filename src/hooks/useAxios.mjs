import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = 'https://todo-api.frontendschool.shop/api';
axios.defaults.timeout = 3000;

function useAxios(fetchParams) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    request(fetchParams);
  }, []);

  const request = async (params) => {
    try {
      setIsLoading(true);
      const res = await axios(params.url);
      setData(res.data);
    } catch(err) {
      setError({message: '잠시 후 다시 요청해 주세요.'});
    } finally {
      setIsLoading(false);
    }
  }

  return {isLoading, data, error};
}

export default useAxios;