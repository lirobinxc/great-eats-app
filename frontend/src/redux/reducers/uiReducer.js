import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: { theme: 'light', activeSortButtonId: null },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setActiveSortButtonId: (state, action) => {
      state.activeSortButtonId = action.payload;
    },
  },
});

export const { toggleTheme, setActiveSortButtonId } = uiSlice.actions;

export default uiSlice.reducer;
