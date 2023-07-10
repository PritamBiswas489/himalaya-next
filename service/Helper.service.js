import axios from 'axios';
import https from 'https';
const API = axios.create({
  baseURL: process.env.REACT_APP_HOST_API,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

const helperApi = {}

helperApi.country = async (data) => {
  try {
    const res = await API.get('country', data);
    return res;
  } catch (error) {
    return error.response;
  }
}
helperApi.sendtoFriend = async (data) => {
  try {
      const res = await API.post(`tour-send-to-friend`, data);
      return res;
  } catch (error) {
      return error.response;
  }
};

export { helperApi }