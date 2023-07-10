import axios from 'axios';
import https from 'https';

const API = axios.create({
    baseURL: process.env.REACT_APP_HOST_API,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
});

const contactApi = {};

contactApi.getInTouch = async (data) => {
    try {
        const res = await API.post(`contact/get-in-touch`, data);
        return res;
    } catch (error) {
        return error.response;
    }
};

export { contactApi };

export const contactContentService = async (data = {}) => {
    try {
        const response = await API.get(`contact/get-contact-content`);
        return response;
    } catch (error) {
        return error.response;
    }
};
