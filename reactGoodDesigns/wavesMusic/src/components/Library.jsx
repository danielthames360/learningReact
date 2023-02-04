import { LibrarySong } from "./";

export const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setSongs={setSongs}
            songs={songs}
          />
        ))}
      </div>
    </div>
  );
};
