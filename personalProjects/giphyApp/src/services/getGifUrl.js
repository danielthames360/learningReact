export const getGifUrl = async ({ word }) => {
  const apiKey = "YOUR API KEY";
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${word}&limit=1`;

  const res = await fetch(apiUrl);
  const { data } = await res.json();
  const { url: gifUrl } = data[0]?.images.original ?? "";
  return {
    gifUrl,
  };
};
