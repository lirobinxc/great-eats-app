import axios from 'axios';

const baseURL = 'http://localhost:8000/api/ratings';

const ratingService = {
  getAll: async () => {
    try {
      const result = await axios.get(baseURL);
      console.log('📣', { getAll: result.data });
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

export default ratingService;
