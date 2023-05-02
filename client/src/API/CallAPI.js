import axios from "./configAxios";

// get api :: getAPI

export const getAPI = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

// post api :: postAPI

export const postAPI = async (url, data) => {
  const response = await axios.post(url, data);
  return response.data;
};

// put api :: putAPI

export const putAPI = async (url, data) => {
  const response = await axios.put(url, data);
  return response.data;
};

// delete api :: deleteAPI

export const deleteApi = async (url) => {
  const response = await axios.delete(url);
  return response.data;
};
