import axios from "axios";

interface ApiProps {
  operationName: string;
  query: string;
  variables: {
    [key: string]: any;
  };
}

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/graphql",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "*/*",
  },
});

const api = async (data: ApiProps) => {
  try {
    const res = await axiosClient.post("", data);
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(`Ocorreu um erro com este código: ${res.status}`);
    }
  } catch (error) {
    return error;
  }
};

export default api;
