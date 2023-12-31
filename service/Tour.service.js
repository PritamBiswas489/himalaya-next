import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_HOST_API,
});

const tourApi = {}

tourApi.tourList = async () => {
  try {
    const res = await API.get(`tours`);
    return res;
  } catch (error) {
    return error.response;
  }
}

tourApi.tourDetailsBySlug = async (slug) => {
  try {
    const res = await API.get(`tour/${slug}`);
    return res;
  } catch (error) {
    return error.response;
  }
}

tourApi.popularTourList = async (slug) => {
  try {
    const res = await API.get(`popular-tour`);
    return res;
  } catch (error) {
    return error.response;
  }
}

tourApi.searchTour = async (slug) => {
  try {
    const res = await API.get(`search-tour/${slug}`);
    return res;
  } catch (error) {
    return error.response;
  }
}

export { tourApi }