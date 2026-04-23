import axios from 'axios';

const API_KEY = '55519599-d6063fdf91732cac9901be169'; 
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  
  return response.data;
};