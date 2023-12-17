import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_bb6otOUZ6JzfO7BVlgctJVGUV59KFTHbeqznTAdYI8o4FiDzETqwxlztBGDEzhL8';

function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log('1', err.response);
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => {
      return res.data;
    })
    .catch(err => console.log('2', err.response));
}
export { fetchBreeds, fetchCatByBreed };
