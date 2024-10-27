import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

let authToken = null;

const fetchAuthToken = async () => {
  console.log(import.meta.env.VITE_API_URL)
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

export const getDepartments = async () => {
  if (!authToken) {
    await fetchAuthToken();
  }

  const response = await api.get('/deptos');
  console.log(response)
  return response.data.list;
};

export const getCities = async (codDepto) => {
  if (!authToken) {
    await fetchAuthToken();
  }

  const response = await api.get('/ciudades', {
    params: {
      codDepto,
    }
  });
  return response.data.list;
};

