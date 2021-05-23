import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import restoService from '../../services/restaurantService';

/* Async Thunks */
export const initRestaurants = createAsyncThunk(
  'restaurants/initRestaurants',
  async (arg, thunkAPI) => {
    try {
      const response = await restoService.getAll();
      return response;
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

/* MAIN SLICE */
export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: { isLoading: true, isError: false, data: [] },
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

/* Normal Action Creators */
export const {
  addRestaurant,
  deleteRestaurantById,
  updatRestaurant,
  sortRestaurantsByName,
  sortRestaurantsByLocation,
  sortRestaurantsByPriceRange,
} = restaurantSlice.actions;

/* Reducer */
export default restaurantSlice.reducer;
