import axios from 'axios';
import https from 'https';

const API = axios.create({
  baseURL: process.env.REACT_APP_HOST_API,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
  // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

const bookingApi = {}

bookingApi.createBooking = async (data) => {
  try {
    const res = await API.post('checkout/create', data);
    return res;
  } catch (error) {
    return error.response;
  }
}

bookingApi.validCoupon = async (data) => {
  try {
    const res = await API.post('checkout/check-coupon', data);
    return res;
  } catch (error) {
    return error.response;
  }
}

bookingApi.getMyBooking = async (user_id,email) => {
  try {
      const response = await API.get(`get-my-bookings/${user_id}?email=${email}`);
      return response;
  } catch (error) {
      return error.response;
  }
};


// bookingApi.register = async (data) => {
//   try {
//     const res = await API.post('signup', data);
//     return res;
//   } catch (error) {
//     return error.response;
//   }
// }

export { bookingApi }