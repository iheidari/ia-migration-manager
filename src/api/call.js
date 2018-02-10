import axios from 'axios';

async function Get(url) {
    return axios.get(url);
}

export { Get };

export const GetAll = (urls) => {
    const allGets = urls.map((url) => axios.get(url));
    axios.all(allGets)
        .then(axios.spread(function (...retsponses) {
            retsponses.map((resp) => console.log(resp.data));

        }));

} 
