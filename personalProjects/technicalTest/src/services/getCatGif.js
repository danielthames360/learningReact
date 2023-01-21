export const getCatGif = async (word) => {
  const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${word}&limit=1`;

  const res = await fetch(apiURL);
  const { data } = await res.json();
  return data[0]?.images.original.url ?? "";
};
