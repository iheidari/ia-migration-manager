import axios from 'axios';

async function Get(url) {
    return axios.get(url);
    const t =  Promise.resolve(axios.get(url));
    // .then(function (response) {
    //     console.log(response);
    //     return response;
    // })
    // .catch(function (error) {
    //     console.log(error);
    //     return undefined;
    // });
    console.log(t);
    return await(t);
}

export { Get };

export const GetAll = (urls) => {
    const allGets = urls.map((url) => axios.get(url));
    axios.all(allGets)
        .then(axios.spread(function (...retsponses) {
            retsponses.map((resp) => console.log(resp.data));

        }));

} 
