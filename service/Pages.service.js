import axios from 'axios';
import https from 'https';

const API = axios.create({
  baseURL: process.env.REACT_APP_HOST_API,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

const pagesApi = {}

pagesApi.home = async () => {
  try {
    const res = await API.get('page/home');
    console.log({res});
    return res;
  } catch (error) {
    console.log({error});
    return error.response;
  }
}

pagesApi.footer = async () => {
  try {
    const res = await API.get('page/footer');
    return res;
  } catch (error) {
    return error.response;
  }
}

export { pagesApi }