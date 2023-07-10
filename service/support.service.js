import axios from 'axios';
import https from 'https';

const API = axios.create({
    baseURL: process.env.REACT_APP_HOST_API,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
});

export const getContentService = async (slug) => {
    try {
        const response = await API.get(`support/get-content/${slug}`);
        return response;
    } catch (error) {
        return error.response;
    }
};
