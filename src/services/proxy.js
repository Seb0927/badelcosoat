const axios = require('axios');

module.exports = async function (context, req) {
  const { path, ...params } = req.query;

  try {
    const response = await axios.get(`${import.meta.VITE_API_URL}/${path}`, {
      params,
      headers: {
        'apiKey': process.env.VITE_API_KEY,
        'secretKey': process.env.VITE_SECRET_KEY,
      },
    });

    context.res = {
      status: response.status,
      body: response.data,
    };
  } catch (error) {
    context.res = {
      status: error.response ? error.response.status : 500,
      body: error.message,
    };
  }
};