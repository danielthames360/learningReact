import React, { useEffect, useState } from "react";
import { getCatFact, getCatGif } from "../services";

export const useEffectCatData = (state) => {
  const [fact, setFact] = useState("");
  const [imageURL, setImageURL] = useState("");

  const getData = async () => {
    const factResponse = await getCatFact();
    setFact(factResponse);

    const keyWord = factResponse.split(" ").slice(0, 3).join(" ");

    const gifResponse = await getCatGif(keyWord);
    setImageURL(gifResponse);
  };

  useEffect(() => {
    getData();
  }, [state]);

  return { fact, imageURL };
};
