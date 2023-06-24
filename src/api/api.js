import axios from 'axios';


// Replace with your API base URL
// const BASE_URL = 'https://6496b26d83d4c69925a3056a.mockapi.io/api/mock/v1/';

const BASE_URL = "https://8c65-34-83-105-131.ngrok.io";


const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Function to make a GET request
export const get = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to make a POST request
export const post = async (url, payload) => {
  try {
    console.log("payload: ", payload);
    const response = await axiosInstance.post(url, payload);
    return JSON.parse(response.data);
  } catch (error) {
    throw error;
  }
};

// Function to make a PUT request
export const put = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to make a DELETE request
export const del = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};