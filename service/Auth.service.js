import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_HOST_API,
});

const authApi = {}

authApi.login = async (data) => {
 
  try {
    const res = await API.post('signin', data);
    return res;
  } catch (error) {
    return error.response;
  }
}

authApi.register = async (data) => {
  try {
    const res = await API.post('signup', data);
    return res;
  } catch (error) {
    return error.response;
  }
}

authApi.changePassword = async (data) => {
  //console.log(data);
  try {
    const res = await API.post('change-password', data);
    return res;
  } catch (error) {
    return error.response;
  }
}
authApi.editProfile = async (data) => {
  //console.log(data);
  try {
    const res = await API.post('edit-profile', data);
    return res;
  } catch (error) {
    return error.response;
  }
}





export { authApi }