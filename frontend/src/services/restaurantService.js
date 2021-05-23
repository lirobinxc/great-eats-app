import axios from 'axios';

const baseURL = 'http://localhost:8000/api/restaurants';

const restoService = {
  getAll: async () => {
    try {
      const result = await axios.get(baseURL);
      console.log('📣', { getAll: result.data });
      return result.data;
    } catch (err) {
      logError(err);
    }
  },

  getId: async (id) => {
    try {
      const result = await axios.get(`${baseURL}/${id}`);
      console.log('📣', { getId: result.data });
      return result.data;
    } catch (err) {
      logError(err);
    }
  },

  post: async (name, location, price_range) => {
    const body = { name, location, price_range };
    try {
      const result = await axios.post(baseURL, body);
      console.log('📣', { post: result.data });
      return result.data;
    } catch (err) {
      logError(err);
    }
  },
};

function logError(err) {
  console.log(
    '❌ ERROR: \n',
    `Status: ${err.response.status} \n`,
    `Reason: ${err.response.data.error}`
  );
}

export default restoService;
