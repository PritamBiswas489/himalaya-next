import axios from 'axios';
import https from 'https';

const API = axios.create({
  baseURL: process.env.REACT_APP_HOST_API,
  
httpsAgent: new https.Agent({
  rejectUnauthorized: false
})
});

const settingApi = {}

settingApi.setting = async (slug) => {
  try {
    const res = await API.get(`setting`);
    return res;
  } catch (error) {
    return error.response;
  }
}

export { settingApi }