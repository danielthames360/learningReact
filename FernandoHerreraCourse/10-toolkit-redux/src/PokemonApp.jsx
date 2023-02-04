import { useEffect } from "react";
import { getPokemons } from "./slices/pokemon/thunks";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage, decrementPage } from "./slices/pokemon";

export const PokemonApp = () => {
  const {
    page,
    pokemons = [],
    isLoading,
  } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const onIncrementPage = () => {
    dispatch(incrementPage());
    dispatch(getPokemons(page));
  };
  const onDecrementPage = () => {
    if (page <= 0) return;
    dispatch(decrementPage());
    dispatch(getPokemons(page));
  };

  return (
    <>
      <div>PokemonApp</div>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>

      <ul>
        {pokemons.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={onDecrementPage}>
        Back
      </button>
      <button disabled={isLoading} onClick={onIncrementPage}>
        Next
      </button>
    </>
  );
};
