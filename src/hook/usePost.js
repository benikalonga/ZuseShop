/* eslint-disable prettier/prettier */
import {useState, useEffect} from 'react';
import axios from 'axios';

const usePost = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (email, password, onData) => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://dummyjson.com/products/add', {
        email: email,
        password: password,
      });
      setData(response.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    onData(data);
  };
  const rePost = (userEmail, userPassword, onPost) => {
    fetchData(userEmail, userPassword, onPost);
  };
  return {data, isLoading, setIsLoading, error, rePost};
};
export default usePost;
