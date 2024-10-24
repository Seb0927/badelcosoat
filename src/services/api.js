import axios from 'axios';

const api = axios.create({
  baseURL: '/api', 
  headers: {
    'AuthToken': import.meta.env.VITE_AUTHTOKEN, // Add AuthToken header
  },
});

export const getDocumentTypes = async () => {
  const response = await api.get('/tipdoc');
  console.log(response)
  return response.data.list;
};

export const getQuotation = async (numPlaca, numDocumento, codTipoDoc, codProducto = 63) => {
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