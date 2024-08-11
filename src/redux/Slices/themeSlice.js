// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { lightMode: true },
  reducers: {
    toggleTheme: (state) => {
      state.lightMode = !state.lightMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
