import axios from 'axios';

const danoneApiImages = axios.create({
  baseURL: 'https://danone.mediaserviceagency.com/api',
});

export default danoneApiImages;
