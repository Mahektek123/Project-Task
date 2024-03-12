import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'Light',
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'Light' ? 'Dark' : 'Light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectThemeMode = (state: { theme: { mode: any; }; }) => state.theme.mode;
export default themeSlice.reducer;