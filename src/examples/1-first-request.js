import { useEffect } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('response: ', await axios(url));
        const {data} = await axios(url);
        console.log("data: ", data);

      } catch (e) {
        console.log("error: ", e.response);
      }
    };
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
