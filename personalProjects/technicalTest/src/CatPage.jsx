import React, { useState } from "react";
import { useEffectCatData } from "./hooks/useEffectCatData";

export const CatPage = () => {
  const [next, setNext] = useState(1);

  const { fact, imageURL } = useEffectCatData(next);

  return (
    <>
      <div className="container">
        <div className="visor">
          <div className="col-6">
            <img src={imageURL} alt="CatImage" />
          </div>
          <div className="col-6">
            <p>{fact}</p>
          </div>
        </div>
        <div className="controls">
          <button onClick={() => setNext((old) => old + 1)}>Next</button>
        </div>
      </div>
    </>
  );
};
