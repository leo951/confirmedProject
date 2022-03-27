import axios from 'axios';

const getSneakers = async () => {
  return await axios({
    method: 'GET',
    url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
    params: {limit: '20', brand: 'Adidas'},
    headers: {
      'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
      'x-rapidapi-key': '0b4a3b6537mshd039b5f654ce9b1p195a55jsn249c4d2939a2',
      // 'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
      // 'X-RapidAPI-Key': '4fa17e2b51msha2b169814db974ep1b2769jsnc61411cb32f6',
    },
  });
};

const getSneaker = async id => {
  return await axios({
    method: 'GET',
    url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`,
    headers: {
      'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
      'x-rapidapi-key': '0b4a3b6537mshd039b5f654ce9b1p195a55jsn249c4d2939a2',
      // 'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
      // 'X-RapidAPI-Key': '4fa17e2b51msha2b169814db974ep1b2769jsnc61411cb32f6',
    },
  });
};

export default getSneakers; getSneaker;
