import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 1,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.pokemons = action.payload.pokemons;
    },
    incrementPage: (state) => {
      state.page++;
    },
    decrementPage: (state) => {
      state.page--;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingPokemons,
  setPokemons,
  incrementPage,
  decrementPage,
} = pokemonSlice.actions;
