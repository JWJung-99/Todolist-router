import axios from "axios";

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: "https://todo-api.frontendschool.shop/api",
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
      // Accept: 'application/json'
    }
  })

  return instance;
}

export default useAxiosInstance;