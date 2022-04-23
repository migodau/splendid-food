const apiUrl = import.meta.env.VITE_API_URL;

const getProducts = async () => {
  let data = await fetch(apiUrl + '/products')
    .then(response => response.json())
    .catch(error => console.error({ error }));
  return data;
}

const getRecommended = async () => {
  let data = await getProducts()
    .then(response => response.filter(p => p.recommended))
    .catch(error => console.error({ error }));
  return data;
}

export {
  getProducts, getRecommended
}