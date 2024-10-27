import axios from 'axios';

const api = axios.create({
  baseURL: '/api/proxy',
});

let authToken = null;

const fetchAuthToken = async () => {
  try {
    const response = await api.get('/', {
      params: { path: 'token' },
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
  const response = await api.get('/', {
    params: { path: 'tipdoc' },
  });
  return response.data.list;
};

export const getQuotation = async (numPlaca, numDocumento, codTipoDoc, codProducto = 63) => {
  if (!authToken) {
    await fetchAuthToken();
  }
  const response = await api.get('/', {
    params: {
      path: 'soat',
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
  const response = await api.get('/', {
    params: { path: 'deptos' },
  });
  return response.data.list;
};

export const getCities = async (codDepto) => {
  if (!authToken) {
    await fetchAuthToken();
  }
  const response = await api.get('/', {
    params: {
      path: 'ciudades',
      codDepto,
    },
  });
  return response.data.list;
};