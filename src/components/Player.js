import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  //useEffect
  useEffect(() => {
    const newSongs = songs.map((s) => ({
      ...s,
      active: s.id === currentSong.id,
    }));
    setSongs(newSongs);
  }, [setSongs, songs, currentSong]);
  //State
  const [playBtn, setPlayBtn] = useState(faPlay);

  //Event Handlers

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
      setPlayBtn(faPlay);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
      setPlayBtn(faPause);
    }
  };

  const slideHandler = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: newTime });
  };

  const skipHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
      } else {
        setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      }
    }

    setTimeout(() => {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              audioRef.current.play();
            })
            .catch((error) => console.error(error));
        }
      }
    }, 0);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]} )`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={slideHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>

        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={playBtn}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipHandler("skip-forward")}
        />
      </div>
    </div>
  );
};
export default Player;
