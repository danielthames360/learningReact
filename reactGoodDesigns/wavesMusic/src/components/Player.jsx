import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  setSongs,
  songs = [],
}) => {
  const onActiveLibrary = (nextPrev) => {
    const newSongs = songs.map((item) => {
      if (item.id === nextPrev.id) return { ...item, active: true };
      return { ...item, active: false };
    });
    setSongs(newSongs);
  };

  const onPlaySong = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getSongTime = (seconds) => {
    const date = new Date(seconds * 1000);
    if (date.getUTCHours > 0) return date.toISOString().slice(11, 19);
    return date.toISOString().slice(14, 19);
  };

  const onDragTimeSong = ({ target }) => {
    const { value } = target;
    audioRef.current.currentTime = value;
    setSongInfo({ ...songInfo, currentTime: value });
  };

  const onSkipTrack = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      onActiveLibrary(songs[(currentIndex + 1) % songs.length]);
    }

    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        onActiveLibrary(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      onActiveLibrary(songs[(currentIndex - 1) % songs.length]);
    }

    if (isPlaying) audioRef.current.play();
  };

  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getSongTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            type="range"
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={onDragTimeSong}
          />
          <div style={trackAnimation} className="animate-track"></div>
        </div>

        <p>{getSongTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => onSkipTrack("skip-back")}
        />
        <FontAwesomeIcon
          onClick={onPlaySong}
          className="play"
          size="2x"
          icon={!isPlaying ? faPlay : faPause}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => onSkipTrack("skip-forward")}
        />
      </div>
    </div>
  );
};
