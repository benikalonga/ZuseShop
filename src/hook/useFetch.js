/* eslint-disable prettier/prettier */
import {useState, useEffect} from 'react';
import axios from 'axios';
import productsList from '../constants/productsList';

const useFetch = endpoint => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://dummyjson.com/products${endpoint}`,
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    fetchData();
  };
  return {data, setData, isLoading, error, reFetch};
};

export const useFetchProductList = endpoint => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      setData(productsList.products);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    fetchData();
  };
  return {data, isLoading, error, reFetch};
};

export const useFetchProduct = endpoint => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      setData(productsList.product);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    fetchData();
  };
  return {data, isLoading, error, reFetch};
};

export default useFetch;
