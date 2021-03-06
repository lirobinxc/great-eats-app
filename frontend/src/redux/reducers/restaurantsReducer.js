import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ratingService from '../../services/ratingService';
import restoService from '../../services/restaurantService';

/* ------------------------------------------------------ */
/*                      ASYNC THUNKS                      */
/* ------------------------------------------------------ */
export const initRestaurants = createAsyncThunk(
  'restaurants/initRestaurants',
  async (arg, thunkAPI) => {
    try {
      const restos = await restoService.getAll();
      const ratings = await ratingService.getAll();
      const normalizedRestos = { all_restaurants: [] };
      const normalizedRatings = { all_restaurants: [], all_reviews: [] };

      // Normalize API data into an index (keyed by restaurant_id)
      for (let resto of restos) {
        normalizedRestos[resto.id] = resto;
        normalizedRestos.all_restaurants.push(resto.id);
      }
      for (let rating of ratings) {
        normalizedRatings[rating.restaurant_id] = rating;
        normalizedRatings.all_restaurants.push(rating.restaurant_id);
        normalizedRatings.all_reviews.push(rating.id);
      }
      console.log('📣', { normalizedRestos });

      return normalizedRestos;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue(
        [
          {
            id: 0,
            name: "Bob's Burgers",
            location: 'Ocean Avenue',
            price_range: 1,
          },
        ],
        err
      );
    }
  }
);

/* ------------------------------------------------------ */
/*                   MAIN REDUCER SLICE                   */
/* ------------------------------------------------------ */
export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: { isLoading: true, isError: false, data: {} },
  reducers: {
    addRestaurant: (state, action) => {
      state.data.push(action.payload);
    },
    deleteRestaurantById: (state, action) => {
      return state.data.filter((ele) => ele.id === action.payload.id);
    },
    updateRestaurant: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    sortRestaurantsByName: (state, action) => {
      if (action.payload === 'inc') {
        state.data = state.data.sort((a, b) =>
          a.name.localeCompare(b.name, { ignorePunctuation: true })
        );
      }
      if (action.payload === 'dec') {
        state.data = state.data.sort((a, b) =>
          b.name.localeCompare(a.name, { ignorePunctuation: true })
        );
      }
    },
    sortRestaurantsByLocation: (state, action) => {
      if (action.payload === 'inc') {
        state.data = state.data.sort((a, b) =>
          a.location.localeCompare(b.location, { ignorePunctuation: true })
        );
      }
      if (action.payload === 'dec') {
        state.data = state.data.sort((a, b) =>
          b.location.localeCompare(a.location, { ignorePunctuation: true })
        );
      }
    },
    sortRestaurantsByPriceRange: (state, action) => {
      if (action.payload === 'inc') {
        state.data = state.data.sort((a, b) => a.price_range - b.price_range);
      }
      if (action.payload === 'dec') {
        state.data = state.data.sort((a, b) => b.price_range - a.price_range);
      }
    },
  },
  extraReducers: {
    [initRestaurants.pending]: (state, action) => {
      console.log('📣 initRestaurants PENDING');
      return { ...state, isLoading: true, isError: false };
    },
    [initRestaurants.fulfilled]: (state, action) => {
      console.log('📣 initRestaurants FULFILLED');
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    },
    [initRestaurants.rejected]: (state, action) => {
      console.log('📣 initRestaurants REJECTED');
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: action.payload,
      };
    },
  },
});

/* --------------- Exports --------------- */
export const {
  addRestaurant,
  deleteRestaurantById,
  updatRestaurant,
  sortRestaurantsByName,
  sortRestaurantsByLocation,
  sortRestaurantsByPriceRange,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
