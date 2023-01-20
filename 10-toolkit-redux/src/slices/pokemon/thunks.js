import { pokemonApi } from "../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //PENDING: Realizar peticion http

    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon??limit=${page * 10}&offset=10`
    // );
    // const data = await resp.json();
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page }));
  };
};
