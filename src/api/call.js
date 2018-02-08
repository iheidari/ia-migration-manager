import axios from 'axios';

export const Get = (url) => {
    axios.get(url)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return undefined;
        });
}

export const GetAll = (urls) => {
    const allGets = urls.map((url)=>axios.get(url));
    axios.all(allGets)
        .then(axios.spread(function (...retsponses) {
            retsponses.map((resp)=>console.log(resp.data));
            
        }));

} 
