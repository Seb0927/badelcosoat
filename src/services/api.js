import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

let authToken = null;

const fetchAuthToken = async () => {
  try {
    const response = await api.get('api/token', {
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
  const response = await api.get('api/tipdoc');
  return response.data.list;
};

export const getQuotation = async (numPlaca, numDocumento, codTipoDoc, codProducto = 63) => {
  if (!authToken) {
    await fetchAuthToken();
  }
  const response = await api.get('api/soat', {
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
  const response = await api.get('api/deptos');
  return response.data.list;
};

export const getCities = async (codDepto) => {
  if (!authToken) {
    await fetchAuthToken();
  }
  const response = await api.get('api/ciudades', {
    params: {
      codDepto,
    },
  });
  return response.data.list;
};

// New function to create a Mercado Pago preference
export const createPreference = async (item) => {
  try {
    const response = await api.post('/create_preference', item);
    return response.data;
  } catch (error) {
    console.error('Error creating preference:', error);
    throw error;
  }
};