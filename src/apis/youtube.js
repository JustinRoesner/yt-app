import axios from 'axios';

//preconfigured base for axios
//url is everything before search on api
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
