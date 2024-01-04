import axios from "axios";

const baseURL = "http://localhost:8000";

export const axiosGET = (url) => {
  return axios.get(`${baseURL}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const axiosPOST = (url, data) => {
  return axios.post(`${baseURL}${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const axiosDELETE = (url) => {
  return axios.delete(`${baseURL}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const axiosPUT = (url, data) => {
  return axios.put(`${baseURL}${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
