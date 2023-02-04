export const Song = ({ currentSong, setLibraryStatus }) => {
  return (
    <div
      className="song-container"
      onClick={() => setLibraryStatus((curr) => !curr)}
    >
      <img src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};
