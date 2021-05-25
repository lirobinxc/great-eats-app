import axios from 'axios';

const baseURL = 'http://localhost:8000/api/reviews';

const reviewService = {
  getAll: async () => {
    try {
      const result = await axios.get(baseURL);
      console.log('📣', { getAll: result.data });
      return result.data;
    } catch (err) {
      logError(err);
    }
  },

  post: async (restaurant_id, name, review, rating) => {
    const body = { restaurant_id, name, review, rating };
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

export default reviewService;
