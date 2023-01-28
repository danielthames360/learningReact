export const getRandomFact = async () => {
  const apiUrl = `https://api.api-ninjas.com/v1/facts?limit=1`;
  const apiKey = "AywAaU/3ILLPmIzKJnMvpg==gR7dhNNOdS7LDOKg";

  const res = await fetch(apiUrl, {
    headers: {
      "X-Api-Key": apiKey,
    },
  });
  const data = await res.json();
  const { fact } = data[0];

  return {
    fact,
  };
};
