import { useEffect, useRef, useState } from "react";
import { getSongsData } from "./api/getSongsData";
import { Library, Player, Song, Nav } from "./components";

function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(getSongsData());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const onTimeUpdate = ({ target }) => {
    const { currentTime, duration } = target;

    //calculate percentage
    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    setSongInfo({
      ...songInfo,
      currentTime,
      duration: duration || 0,
      animationPercentage,
    });
  };

  const onSongEnd = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) audioRef.current.play();
  }, [currentSong]);

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} setLibraryStatus={setLibraryStatus} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />

      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
        src={currentSong.audio}
        onEnded={onSongEnd}
      ></audio>
    </div>
  );
}

export default App;
