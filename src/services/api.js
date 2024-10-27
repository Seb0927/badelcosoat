import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

let authToken = null;

const fetchAuthToken = async () => {
  try {
    const response = await api.get('/token', {
      headers: {
        'apiKey': import.meta.env.VITE_API_KEY,
        'secretKey': import.meta.env.VITE_SECRET_KEY,
      },
    });
    authToken = response.data.AuthToken;
    api.defaults.headers.common['AuthToken'] = authToken;
  } catch (error) {
    console.error('Error fetching AuthToken:', error);
  }
};

export const getDocumentTypes = async () => {
  if (!authToken) {
    await fetchAuthToken();
  }
  const response = await api.get('/tipdoc');
  return response.data.list;
};

export const getQuotation = async (numPlaca, numDocumento, codTipoDoc, codProducto = 63) => {
  if (!authToken) {
    await fetchAuthToken();
  }
  const response = await api.get('/soat', {
    params: {
      codProducto,
      numPlaca,
      numDocumento,
      codTipoDoc,
    },
  });
  return response.data;
};

