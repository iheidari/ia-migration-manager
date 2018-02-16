import axios from "axios";

export const Get = url => {
  return axios.get(url, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000/",
      "Access-Control-Allow-Credentials": true
    }
  });
};

export const GetAll = urls => {
  const allGets = urls.map(url => axios.get(url));
  axios.all(allGets).then(
    axios.spread(function(...retsponses) {
      retsponses.map(resp => console.log(resp.data));
    })
  );
};
