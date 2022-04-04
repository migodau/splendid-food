const API_URL = 'http://localhost:3004';

const getProducts = async () => {
  let data = await fetch(API_URL + '/products')
    .then(response => response.json())
    .catch(error => console.error({ error }));
  return data;
}

const getRecommended = async () => {
  let data = await fetch(API_URL + '/products/recommended')
    .then(response => response.json())
    .catch(error => console.error({ error }));
  return data;
}

export {
  getProducts, getRecommended
}