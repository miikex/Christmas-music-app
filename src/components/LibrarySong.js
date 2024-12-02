import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    console.log(audioRef);
    setCurrentSong(song);
    audioRef.current.play();

    const newSongs = songs.map((s) => ({
      ...s,
      active: s.id === song.id,
    }));
    setSongs(newSongs);

    if (isPlaying) {
      const PlayPromise = audioRef.current.play();
      if (PlayPromise !== undefined) {
        PlayPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <h2>{song.name}</h2>
      <h3>{song.artist}</h3>
    </div>
  );
};
export default LibrarySong;
