import { useEffect } from 'react';
import AuthFetch from '../axios-setup/interceptors';
const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  console.log('axios interceptors');

  const fetchData = async () => {
    try {
      const response = await AuthFetch('/react-store-products')
      console.log('response: ',response);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
