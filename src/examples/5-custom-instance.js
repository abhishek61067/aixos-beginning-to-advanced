import { useEffect } from "react";
import AuthFetch from "../axios-setup/axios-instance";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const response = await AuthFetch('/react-store-products')
      const response2  = await axios(randomUserUrl)
      console.log("axios instance page mounted");
      console.log('response: ', response);
      console.log('response2: ', response2);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
