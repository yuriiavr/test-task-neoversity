import { createSlice } from '@reduxjs/toolkit';

const getInitialFavorites = () => {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: getInitialFavorites(),
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camper = action.payload;
      const existingCamper = state.items.find(item => item.id === camper.id);
      if (existingCamper) {
        state.items = state.items.filter(item => item.id !== camper.id);
      } else {
        state.items.push(camper);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;