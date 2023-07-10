import axios from 'axios';
import https from 'https';
const API = axios.create({
  baseURL: process.env.REACT_APP_HOST_API,
  
  
httpsAgent: new https.Agent({
  rejectUnauthorized: false
})
});

const reviewApi = {}

reviewApi.list = async (slug) => {
  try {
    const res = await API.get(`review/list`);
    return res;
  } catch (error) {
    return error.response;
  }
}
reviewApi.customerReviewlist = async (user_id) => {
  try {
    const res = await API.get(`review/customer-review-list/${user_id}`);
    return res;
  } catch (error) {
    return error.response;
  }
}
reviewApi.sendReview = async (data) => {
    try {
        const res = await API.post(`review/send-to-admin`, data);
        return res;
    } catch (error) {
        return error.response;
    }
}

export { reviewApi }