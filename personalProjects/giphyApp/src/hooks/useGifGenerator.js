import { useEffect, useState } from "react";
import { getRandomFact } from "../services/getRandomFact";
import { getGifUrl } from "../services/getGifUrl";

export const useGifGenerator = () => {
  const [fact, setFact] = useState("");
  const [gifUrl, setGifUrl] = useState("");
  const [newGifRequest, setNewGifRequest] = useState(1);

  const getData = async () => {
    const { fact: responseFact } = await getRandomFact();
    setFact(responseFact);

    const keyWord = responseFact.split(" ").splice(0, 3).join(" ");

    const { gifUrl: responseUrl } = await getGifUrl({ word: keyWord });
    setGifUrl(responseUrl);
  };

  useEffect(() => {
    getData();
  }, [newGifRequest]);

  return {
    gifUrl,
    fact, 
    setNewGifRequest,
    newGifRequest
  };
};
