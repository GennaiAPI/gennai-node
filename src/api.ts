import axios from "axios";

interface ApiProps {
  operationName: string;
  query: string;
  variables: {
    [key: string]: any;
  };
}

const lowercaseFirstLetter = (word: string) => {
  return word.charAt(0).toLowerCase() + word.slice(1);
};

const axiosClient = axios.create({
  baseURL: "http://gennai.herokuapp.com/graphql",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "*/*",
  },
});

const api = async (data: ApiProps) => {
  try {
    const res = await axiosClient.get("", {
      params: data,
    });
    if (res.status === 200) {
      return res.data.data[lowercaseFirstLetter(data.operationName)];
    } else {
      throw new Error(`Ocorreu um erro com este código: ${res.status}`);
    }
  } catch (error) {
    return error;
  }
};

export default api;
