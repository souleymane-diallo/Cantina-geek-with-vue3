import axios from 'axios';

export default (url = 'http://localhost:9000/api/') => {
    return axios.create({
        baseURL: url
    });
};