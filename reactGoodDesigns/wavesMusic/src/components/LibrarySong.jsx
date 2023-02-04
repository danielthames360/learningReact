export const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  songs,
  setSongs,
}) => {
  const onSelectSong = async () => {
    await setCurrentSong(song);
    const newSongs = songs.map((item) => {
      if (item.id === song.id) return { ...item, active: true };
      return { ...item, active: false };
    });
    setSongs(newSongs);
    setIsPlaying(true);
  };

  return (
    <div
      onClick={onSelectSong}
      className={`library-song ${song.active ? "selected" : ""} `}
    >
      <img src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
