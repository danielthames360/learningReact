export const getCatFact = async () => {
  const apiURL = "https://catfact.ninja/fact";

  const res = await fetch(apiURL);
  const { fact } = await res.json();
  return fact;
};
